import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionCacheBehavior:
    r"""AwsCloudFrontDistributionCacheBehavior
    Information about a cache behavior for the distribution.
    """
    
    viewer_protocol_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViewerProtocolPolicy') }})
    
