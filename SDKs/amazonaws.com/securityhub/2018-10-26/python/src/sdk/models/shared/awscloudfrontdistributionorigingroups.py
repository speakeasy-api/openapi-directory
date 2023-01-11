import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscloudfrontdistributionorigingroup as shared_awscloudfrontdistributionorigingroup


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionOriginGroups:
    r"""AwsCloudFrontDistributionOriginGroups
    Provides information about origin groups that are associated with the distribution.
    """
    
    items: Optional[list[shared_awscloudfrontdistributionorigingroup.AwsCloudFrontDistributionOriginGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    
