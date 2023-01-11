import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class License:
    r"""License
    License
    """
    
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    conditions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    featured: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    implementation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('implementation') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    limitations: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitations') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    permissions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    spdx_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
