import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codedeliverydetailstype as shared_codedeliverydetailstype


@dataclass_json
@dataclasses.dataclass
class ForgotPasswordResponse:
    r"""ForgotPasswordResponse
    Respresents the response from the server regarding the request to reset a password.
    """
    
    code_delivery_details: Optional[shared_codedeliverydetailstype.CodeDeliveryDetailsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetails') }})
    
