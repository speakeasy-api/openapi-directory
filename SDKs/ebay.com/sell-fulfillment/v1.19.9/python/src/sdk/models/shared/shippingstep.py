import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extendedcontact as shared_extendedcontact


@dataclass_json
@dataclasses.dataclass
class ShippingStep:
    r"""ShippingStep
    This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.
    """
    
    ship_to: Optional[shared_extendedcontact.ExtendedContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipTo') }})
    ship_to_reference_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipToReferenceId') }})
    shipping_carrier_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierCode') }})
    shipping_service_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServiceCode') }})
    
