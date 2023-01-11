import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sellinglimit as shared_sellinglimit


@dataclass_json
@dataclasses.dataclass
class SellingPrivileges:
    r"""SellingPrivileges
    A merchant's selling limit, and the status of their account registration.
    """
    
    seller_registration_completed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerRegistrationCompleted') }})
    selling_limit: Optional[shared_sellinglimit.SellingLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellingLimit') }})
    
