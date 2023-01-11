import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutDestinationRequest:
    destination_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    target_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    
