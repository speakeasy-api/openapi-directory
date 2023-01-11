import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TagResourcesInput:
    resource_arn_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNList') }})
    tags: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
