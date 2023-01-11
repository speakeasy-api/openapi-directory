import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import requestedservicequotachange as shared_requestedservicequotachange


@dataclass_json
@dataclasses.dataclass
class RequestServiceQuotaIncreaseResponse:
    requested_quota: Optional[shared_requestedservicequotachange.RequestedServiceQuotaChange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedQuota') }})
    
