import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateTagOptionWithResourceInput:
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    tag_option_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagOptionId') }})
    
