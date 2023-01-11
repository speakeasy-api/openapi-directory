import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carlistingrank as shared_carlistingrank


@dataclass_json
@dataclasses.dataclass
class CarRankResponse:
    r"""CarRankResponse
    Ranking query response
    """
    
    num_ranked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_ranked') }})
    ranked_listings: Optional[list[shared_carlistingrank.CarListingRank]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranked_listings') }})
    
