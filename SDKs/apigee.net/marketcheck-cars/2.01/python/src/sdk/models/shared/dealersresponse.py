import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dealer as shared_dealer


@dataclass_json
@dataclasses.dataclass
class DealersResponse:
    r"""DealersResponse
    Dealers Response
    """
    
    dealers: Optional[list[shared_dealer.Dealer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealers') }})
    num_found: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_found') }})
    
