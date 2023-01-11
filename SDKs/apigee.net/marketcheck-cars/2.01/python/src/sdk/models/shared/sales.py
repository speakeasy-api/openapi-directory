import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import salesstats as shared_salesstats


@dataclass_json
@dataclasses.dataclass
class Sales:
    r"""Sales
    Sales count query response
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    counts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    cpo: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpo') }})
    dom_stats: Optional[shared_salesstats.SalesStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom_stats') }})
    inventory_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory_type') }})
    make: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    miles_stats: Optional[shared_salesstats.SalesStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles_stats') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    non_cpo: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non-cpo') }})
    price_stats: Optional[shared_salesstats.SalesStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_stats') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    taxonomy_vin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomy_vin') }})
    trim: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
