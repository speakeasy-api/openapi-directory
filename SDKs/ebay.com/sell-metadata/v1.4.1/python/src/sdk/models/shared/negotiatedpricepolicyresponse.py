import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import negotiatedpricepolicy as shared_negotiatedpricepolicy
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class NegotiatedPricePolicyResponse:
    negotiated_price_policies: Optional[list[shared_negotiatedpricepolicy.NegotiatedPricePolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negotiatedPricePolicies') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
