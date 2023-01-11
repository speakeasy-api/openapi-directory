import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscloudfrontdistributionorigingroupfailover as shared_awscloudfrontdistributionorigingroupfailover


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionOriginGroup:
    r"""AwsCloudFrontDistributionOriginGroup
    Information about an origin group for the distribution.
    """
    
    failover_criteria: Optional[shared_awscloudfrontdistributionorigingroupfailover.AwsCloudFrontDistributionOriginGroupFailover] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailoverCriteria') }})
    
