import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SellerActionsToRelease:
    r"""SellerActionsToRelease
    This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order.
    """
    
    seller_action_to_release: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerActionToRelease') }})
    
