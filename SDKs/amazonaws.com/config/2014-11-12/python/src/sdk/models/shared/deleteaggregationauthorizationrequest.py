import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteAggregationAuthorizationRequest:
    authorized_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizedAccountId') }})
    authorized_aws_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizedAwsRegion') }})
    
