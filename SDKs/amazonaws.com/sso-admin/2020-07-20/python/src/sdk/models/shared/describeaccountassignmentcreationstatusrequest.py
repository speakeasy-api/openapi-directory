import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeAccountAssignmentCreationStatusRequest:
    account_assignment_creation_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountAssignmentCreationRequestId') }})
    instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    
