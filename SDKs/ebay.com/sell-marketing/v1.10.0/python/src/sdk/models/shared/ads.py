import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ad as shared_ad


@dataclass_json
@dataclasses.dataclass
class Ads:
    r"""Ads
    This type defines the container for an array of ads.
    """
    
    ads: Optional[list[shared_ad.Ad]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ads') }})
    
