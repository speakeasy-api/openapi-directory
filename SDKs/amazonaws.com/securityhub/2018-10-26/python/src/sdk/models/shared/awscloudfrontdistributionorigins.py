import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscloudfrontdistributionoriginitem as shared_awscloudfrontdistributionoriginitem


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionOrigins:
    r"""AwsCloudFrontDistributionOrigins
    A complex type that contains information about origins and origin groups for this distribution.
    """
    
    items: Optional[list[shared_awscloudfrontdistributionoriginitem.AwsCloudFrontDistributionOriginItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    
