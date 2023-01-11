import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PendingAggregationRequest:
    r"""PendingAggregationRequest
    An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.
    """
    
    requester_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterAccountId') }})
    requester_aws_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterAwsRegion') }})
    
