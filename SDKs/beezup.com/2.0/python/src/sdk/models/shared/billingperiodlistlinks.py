import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getbillingperiodslink as shared_links_getbillingperiodslink


@dataclass_json
@dataclasses.dataclass
class BillingPeriodListLinks:
    self: Optional[shared_links_getbillingperiodslink.LinksGetBillingPeriodsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
