import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ad as shared_ad


@dataclass_json
@dataclasses.dataclass
class MarketingRecommendation:
    r"""MarketingRecommendation
    A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.
    """
    
    ad: Optional[shared_ad.Ad] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ad') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
