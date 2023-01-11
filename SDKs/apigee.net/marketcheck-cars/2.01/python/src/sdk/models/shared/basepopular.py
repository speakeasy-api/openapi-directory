import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import salesstats as shared_salesstats


@dataclass_json
@dataclasses.dataclass
class BasePopular:
    r"""BasePopular
    Single popular car in array
    """
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    counts: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    dom_stats: Optional[shared_salesstats.SalesStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom_stats') }})
    inventory_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryType') }})
    make: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    miles_stats: Optional[shared_salesstats.SalesStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles_stats') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    price_stats: Optional[shared_salesstats.SalesStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_stats') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
