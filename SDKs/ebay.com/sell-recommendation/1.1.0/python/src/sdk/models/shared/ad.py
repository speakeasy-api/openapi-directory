import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bidpercentages as shared_bidpercentages


@dataclass_json
@dataclasses.dataclass
class Ad:
    r"""Ad
    A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.
    """
    
    bid_percentages: Optional[list[shared_bidpercentages.BidPercentages]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidPercentages') }})
    promote_with_ad: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promoteWithAd') }})
    
