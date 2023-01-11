import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CrawlDatamodelField:
    group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    multiple: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiple') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permissions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    subtype: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
