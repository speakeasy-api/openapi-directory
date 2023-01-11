import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shipmentcancellation as shared_shipmentcancellation
from ..shared import order as shared_order
from ..shared import packagespecification as shared_packagespecification
from ..shared import purchasedrate as shared_purchasedrate
from ..shared import contact as shared_contact


@dataclass_json
@dataclasses.dataclass
class Shipment:
    r"""Shipment
    This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
    """
    
    cancellation: Optional[shared_shipmentcancellation.ShipmentCancellation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellation') }})
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    label_custom_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelCustomMessage') }})
    label_download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDownloadUrl') }})
    label_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelSize') }})
    orders: Optional[list[shared_order.Order]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    package_specification: Optional[shared_packagespecification.PackageSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageSpecification') }})
    rate: Optional[shared_purchasedrate.PurchasedRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    return_to: Optional[shared_contact.Contact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnTo') }})
    ship_from: Optional[shared_contact.Contact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipFrom') }})
    ship_to: Optional[shared_contact.Contact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipTo') }})
    shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentId') }})
    shipment_tracking_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentTrackingNumber') }})
    
