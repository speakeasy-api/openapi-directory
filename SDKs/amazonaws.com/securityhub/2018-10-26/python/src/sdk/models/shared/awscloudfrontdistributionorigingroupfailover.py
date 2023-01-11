import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscloudfrontdistributionorigingroupfailoverstatuscodes as shared_awscloudfrontdistributionorigingroupfailoverstatuscodes


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionOriginGroupFailover:
    r"""AwsCloudFrontDistributionOriginGroupFailover
    Provides information about when an origin group fails over.
    """
    
    status_codes: Optional[shared_awscloudfrontdistributionorigingroupfailoverstatuscodes.AwsCloudFrontDistributionOriginGroupFailoverStatusCodes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusCodes') }})
    
