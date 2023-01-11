import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codedeliverydetailstype as shared_codedeliverydetailstype


@dataclass_json
@dataclasses.dataclass
class UpdateUserAttributesResponse:
    r"""UpdateUserAttributesResponse
    Represents the response from the server for the request to update user attributes.
    """
    
    code_delivery_details_list: Optional[list[shared_codedeliverydetailstype.CodeDeliveryDetailsType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeDeliveryDetailsList') }})
    
