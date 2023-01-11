import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lastcrawlinfo as shared_lastcrawlinfo
from ..shared import lineageconfiguration as shared_lineageconfiguration
from ..shared import recrawlpolicy as shared_recrawlpolicy
from ..shared import schedule as shared_schedule
from ..shared import schemachangepolicy as shared_schemachangepolicy
from ..shared import crawlerstate_enum as shared_crawlerstate_enum
from ..shared import crawlertargets as shared_crawlertargets


@dataclass_json
@dataclasses.dataclass
class Crawler:
    r"""Crawler
    Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog.
    """
    
    classifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classifiers') }})
    configuration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    crawl_elapsed_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlElapsedTime') }})
    crawler_security_configuration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrawlerSecurityConfiguration') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    last_crawl: Optional[shared_lastcrawlinfo.LastCrawlInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastCrawl') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lineage_configuration: Optional[shared_lineageconfiguration.LineageConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineageConfiguration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    recrawl_policy: Optional[shared_recrawlpolicy.RecrawlPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecrawlPolicy') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    schedule: Optional[shared_schedule.Schedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    schema_change_policy: Optional[shared_schemachangepolicy.SchemaChangePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaChangePolicy') }})
    state: Optional[shared_crawlerstate_enum.CrawlerStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    table_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablePrefix') }})
    targets: Optional[shared_crawlertargets.CrawlerTargets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
