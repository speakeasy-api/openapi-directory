import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentvatratesummary as shared_documentvatratesummary


@dataclass_json
@dataclasses.dataclass
class DocumentSummary:
    gross_amount_local: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross_amount_local') }})
    net_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_amount') }})
    net_amount_local: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_amount_local') }})
    vat_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat_amount') }})
    vat_amount_local: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat_amount_local') }})
    vat_rate_summary: Optional[list[shared_documentvatratesummary.DocumentVatRateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat_rate_summary') }})
    
