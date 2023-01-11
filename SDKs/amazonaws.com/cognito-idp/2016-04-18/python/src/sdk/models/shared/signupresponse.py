import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codedeliverydetailstype as shared_codedeliverydetailstype


@dataclass_json
@dataclasses.dataclass
class SignUpResponse:
    r"""SignUpResponse
    The response from the server for a registration request.
    """
    
    user_confirmed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserConfirmed') }})
    user_sub: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserSub') }})
    code_delivery_details: Optional[shared_codedeliverydetailstype.CodeDeliveryDetailsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetails') }})
    
