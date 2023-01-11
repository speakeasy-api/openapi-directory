import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import requestedservicequotachange as shared_requestedservicequotachange


@dataclass_json
@dataclasses.dataclass
class ListRequestedServiceQuotaChangeHistoryByQuotaResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    requested_quotas: Optional[list[shared_requestedservicequotachange.RequestedServiceQuotaChange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedQuotas') }})
    
