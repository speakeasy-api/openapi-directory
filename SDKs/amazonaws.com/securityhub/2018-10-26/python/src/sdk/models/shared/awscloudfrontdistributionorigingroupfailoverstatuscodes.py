import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsCloudFrontDistributionOriginGroupFailoverStatusCodes:
    r"""AwsCloudFrontDistributionOriginGroupFailoverStatusCodes
    The status codes that cause an origin group to fail over.
    """
    
    items: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    
