import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import additionaloption as shared_additionaloption
from ..shared import contact as shared_contact


@dataclass_json
@dataclasses.dataclass
class CreateShipmentFromQuoteRequest:
    r"""CreateShipmentFromQuoteRequest
    This complex type contains the request payload for the createFromShippingQuote method.
    """
    
    additional_options: Optional[list[shared_additionaloption.AdditionalOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalOptions') }})
    label_custom_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelCustomMessage') }})
    label_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelSize') }})
    rate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateId') }})
    return_to: Optional[shared_contact.Contact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnTo') }})
    shipping_quote_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingQuoteId') }})
    
