import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import build as shared_build
from ..shared import nestdealer as shared_nestdealer
from ..shared import listingnestextraattributes as shared_listingnestextraattributes
from ..shared import listingfinance as shared_listingfinance
from ..shared import listinglease as shared_listinglease
from ..shared import listingnestmedia as shared_listingnestmedia


@dataclass_json
@dataclasses.dataclass
class Listing:
    r"""Listing
    Represents a full list of attributes available with Marketcheck for a car
    """
    
    build: Optional[shared_build.Build] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    carfax_1_owner: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carfax_1_owner') }})
    carfax_clean_title: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carfax_clean_title') }})
    data_source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_source') }})
    dealer: Optional[shared_nestdealer.NestDealer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealer') }})
    dom: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom') }})
    dom_180: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom_180') }})
    dom_active: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom_active') }})
    exterior_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exterior_color') }})
    extra: Optional[shared_listingnestextraattributes.ListingNestExtraAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    financing_options: Optional[list[shared_listingfinance.ListingFinance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('financing_options') }})
    first_seen_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at') }})
    first_seen_at_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at_date') }})
    first_seen_at_mc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at_mc') }})
    first_seen_at_mc_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at_mc_date') }})
    first_seen_at_source: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at_source') }})
    first_seen_at_source_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen_at_source_date') }})
    heading: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interior_color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interior_color') }})
    inventory_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory_type') }})
    is_certified: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_certified') }})
    last_seen_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_seen_at') }})
    last_seen_at_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_seen_at_date') }})
    leasing_options: Optional[list[shared_listinglease.ListingLease]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leasing_options') }})
    media: Optional[shared_listingnestmedia.ListingNestMedia] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    miles: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles') }})
    msrp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('msrp') }})
    price: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    ref_miles: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref_miles') }})
    ref_miles_dt: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref_miles_dt') }})
    ref_price: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref_price') }})
    ref_price_dt: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref_price_dt') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    scraped_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scraped_at') }})
    scraped_at_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scraped_at_date') }})
    seller_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller_type') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    stock_no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stock_no') }})
    vdp_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vdp_url') }})
    vin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vin') }})
    
