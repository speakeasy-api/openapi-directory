import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lineageconfiguration as shared_lineageconfiguration
from ..shared import recrawlpolicy as shared_recrawlpolicy
from ..shared import schemachangepolicy as shared_schemachangepolicy
from ..shared import crawlertargets as shared_crawlertargets


@dataclass_json
@dataclasses.dataclass
class CreateCrawlerRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    targets: shared_crawlertargets.CrawlerTargets = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    classifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classifiers') }})
    configuration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    crawler_security_configuration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerSecurityConfiguration') }})
    database_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    lineage_configuration: Optional[shared_lineageconfiguration.LineageConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineageConfiguration') }})
    recrawl_policy: Optional[shared_recrawlpolicy.RecrawlPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecrawlPolicy') }})
    schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    schema_change_policy: Optional[shared_schemachangepolicy.SchemaChangePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaChangePolicy') }})
    table_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablePrefix') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
