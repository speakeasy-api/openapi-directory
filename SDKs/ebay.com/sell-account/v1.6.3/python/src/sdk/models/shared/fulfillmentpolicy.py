import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorytype as shared_categorytype
from ..shared import timeduration as shared_timeduration
from ..shared import regionset as shared_regionset
from ..shared import shippingoption as shared_shippingoption


@dataclass_json
@dataclasses.dataclass
class FulfillmentPolicy:
    r"""FulfillmentPolicy
    This root response container defines a seller's fulfillment policy for a specific marketplace and category type. fulfillmentPolicy encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies.
    """
    
    category_types: Optional[list[shared_categorytype.CategoryType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTypes') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    freight_shipping: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freightShipping') }})
    fulfillment_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentPolicyId') }})
    global_shipping: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalShipping') }})
    handling_time: Optional[shared_timeduration.TimeDuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handlingTime') }})
    local_pickup: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPickup') }})
    marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pickup_drop_off: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupDropOff') }})
    ship_to_locations: Optional[shared_regionset.RegionSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipToLocations') }})
    shipping_options: Optional[list[shared_shippingoption.ShippingOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingOptions') }})
    
