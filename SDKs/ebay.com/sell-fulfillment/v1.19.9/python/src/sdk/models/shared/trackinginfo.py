import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrackingInfo:
    r"""TrackingInfo
    This type is used by the shipmentTracking array returned under the evidence container if the seller has provided shipment tracking information as evidence to support PROOF_OF_DELIVERY for an INR-related payment dispute.
    """
    
    shipment_tracking_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentTrackingNumber') }})
    shipping_carrier_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierCode') }})
    
