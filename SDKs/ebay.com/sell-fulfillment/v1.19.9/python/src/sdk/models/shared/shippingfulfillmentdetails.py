import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lineitemreference as shared_lineitemreference


@dataclass_json
@dataclasses.dataclass
class ShippingFulfillmentDetails:
    r"""ShippingFulfillmentDetails
    This type contains the details for creating a fulfillment for an order.
    """
    
    line_items: Optional[list[shared_lineitemreference.LineItemReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    shipped_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippedDate') }})
    shipping_carrier_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCarrierCode') }})
    tracking_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumber') }})
    
