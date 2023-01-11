import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceentry as shared_instanceentry


@dataclass_json
@dataclasses.dataclass
class CreateCloudFormationStackRequest:
    instances: list[shared_instanceentry.InstanceEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    
