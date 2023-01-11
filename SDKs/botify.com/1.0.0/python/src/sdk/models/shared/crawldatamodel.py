import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawldatamodelfield as shared_crawldatamodelfield
from ..shared import crawldatamodelgroup as shared_crawldatamodelgroup


@dataclass_json
@dataclasses.dataclass
class CrawlDatamodel:
    fields: list[shared_crawldatamodelfield.CrawlDatamodelField] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    groups: list[shared_crawldatamodelgroup.CrawlDatamodelGroup] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
