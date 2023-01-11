import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import order as shared_order
from ..shared import packagespecification as shared_packagespecification
from ..shared import contact as shared_contact


@dataclass_json
@dataclasses.dataclass
class ShippingQuoteRequest:
    r"""ShippingQuoteRequest
    This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
    """
    
    orders: Optional[list[shared_order.Order]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    package_specification: Optional[shared_packagespecification.PackageSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageSpecification') }})
    ship_from: Optional[shared_contact.Contact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipFrom') }})
    ship_to: Optional[shared_contact.Contact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipTo') }})
    
