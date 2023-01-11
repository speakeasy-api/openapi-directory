import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codedeliverydetailstype as shared_codedeliverydetailstype


@dataclass_json
@dataclasses.dataclass
class GetUserAttributeVerificationCodeResponse:
    r"""GetUserAttributeVerificationCodeResponse
    The verification code response returned by the server response to get the user attribute verification code.
    """
    
    code_delivery_details: Optional[shared_codedeliverydetailstype.CodeDeliveryDetailsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetails') }})
    
