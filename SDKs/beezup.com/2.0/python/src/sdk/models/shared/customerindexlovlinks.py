import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3


@dataclass_json
@dataclasses.dataclass
class CustomerIndexLovLinks:
    active_offer_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeOfferLov') }})
    beez_up_time_zone_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPTimeZoneLov') }})
    contract_termination_reason_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractTerminationReasonLov') }})
    country_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryLov') }})
    customer_status_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerStatusLov') }})
    invoice_payment_status_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoicePaymentStatusLov') }})
    offer_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerLov') }})
    store_country_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCountryLov') }})
    store_sector_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeSectorLov') }})
    
