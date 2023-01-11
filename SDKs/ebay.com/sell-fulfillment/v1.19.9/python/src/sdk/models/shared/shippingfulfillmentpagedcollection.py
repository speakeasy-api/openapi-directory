import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shippingfulfillment as shared_shippingfulfillment
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class ShippingFulfillmentPagedCollection:
    r"""ShippingFulfillmentPagedCollection
    This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a getShippingFulfillments call. The fulfillments container returns an array of all the fulfillments in the collection.
    """
    
    fulfillments: Optional[list[shared_shippingfulfillment.ShippingFulfillment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillments') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
