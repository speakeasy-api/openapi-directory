import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutDestinationPolicyRequest:
    access_policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicy') }})
    destination_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    
