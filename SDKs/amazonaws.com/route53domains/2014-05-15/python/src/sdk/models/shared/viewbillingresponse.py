import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingrecord as shared_billingrecord


@dataclass_json
@dataclasses.dataclass
class ViewBillingResponse:
    r"""ViewBillingResponse
    The ViewBilling response includes the following elements.
    """
    
    billing_records: Optional[list[shared_billingrecord.BillingRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingRecords') }})
    next_page_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageMarker') }})
    
