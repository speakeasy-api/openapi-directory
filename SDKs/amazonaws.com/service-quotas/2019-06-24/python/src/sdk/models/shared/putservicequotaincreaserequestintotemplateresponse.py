import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicequotaincreaserequestintemplate as shared_servicequotaincreaserequestintemplate


@dataclass_json
@dataclasses.dataclass
class PutServiceQuotaIncreaseRequestIntoTemplateResponse:
    service_quota_increase_request_in_template: Optional[shared_servicequotaincreaserequestintemplate.ServiceQuotaIncreaseRequestInTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceQuotaIncreaseRequestInTemplate') }})
    
