import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import heavyequipmentsbuild as shared_heavyequipmentsbuild
from ..shared import nestdealer as shared_nestdealer
from ..shared import listingnestmedia as shared_listingnestmedia


@dataclass_json
@dataclasses.dataclass
class HeavyEquipmentsBaseListing:
    r"""HeavyEquipmentsBaseListing
    Base heavy equipment listing
    """
    
    build: Optional[shared_heavyequipmentsbuild.HeavyEquipmentsBuild] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    dealer: Optional[shared_nestdealer.NestDealer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealer') }})
    dist: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dist') }})
    dp_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dp_url') }})
    exterior_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exterior_color') }})
    first_seen_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at') }})
    first_seen_at_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at_date') }})
    heading: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interior_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interior_color') }})
    inventory_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory_type') }})
    last_seen_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_seen_at') }})
    last_seen_at_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_seen_at_date') }})
    media: Optional[shared_listingnestmedia.ListingNestMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    miles: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles') }})
    msrp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msrp') }})
    price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    scraped_at: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scraped_at') }})
    scraped_at_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scraped_at_date') }})
    seller_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller_type') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    stock_no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stock_no') }})
    vin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vin') }})
    
