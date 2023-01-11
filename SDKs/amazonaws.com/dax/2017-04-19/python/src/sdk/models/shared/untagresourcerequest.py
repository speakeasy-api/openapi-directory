import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UntagResourceRequest:
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceName') }})
    tag_keys: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeys') }})
    
