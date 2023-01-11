import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscloudfrontdistributioncachebehavior as shared_awscloudfrontdistributioncachebehavior


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionCacheBehaviors:
    r"""AwsCloudFrontDistributionCacheBehaviors
    Provides information about caching for the distribution.
    """
    
    items: Optional[list[shared_awscloudfrontdistributioncachebehavior.AwsCloudFrontDistributionCacheBehavior]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    
