import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketplace_account as shared_marketplace_account
from ..shared import marketplace_listing_plan as shared_marketplace_listing_plan


@dataclass_json
@dataclasses.dataclass
class UserMarketplacePurchase:
    r"""UserMarketplacePurchase
    User Marketplace Purchase
    """
    
    account: shared_marketplace_account.MarketplaceAccount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    billing_cycle: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_cycle') }})
    free_trial_ends_on: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free_trial_ends_on'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_billing_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_billing_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    on_free_trial: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_free_trial') }})
    plan: shared_marketplace_listing_plan.MarketplaceListingPlan = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    unit_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_count') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
