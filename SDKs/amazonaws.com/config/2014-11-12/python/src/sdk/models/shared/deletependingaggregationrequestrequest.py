import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeletePendingAggregationRequestRequest:
    requester_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterAccountId') }})
    requester_aws_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterAwsRegion') }})
    
