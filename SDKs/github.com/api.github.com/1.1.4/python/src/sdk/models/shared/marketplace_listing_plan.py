import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MarketplaceListingPlan:
    r"""MarketplaceListingPlan
    Marketplace Listing Plan
    """
    
    accounts_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts_url') }})
    bullets: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bullets') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    has_free_trial: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_free_trial') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    monthly_price_in_cents: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_price_in_cents') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    price_model: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_model') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    unit_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_name') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    yearly_price_in_cents: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearly_price_in_cents') }})
    
