import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicequotaincreaserequestintemplate as shared_servicequotaincreaserequestintemplate


@dataclass_json
@dataclasses.dataclass
class ListServiceQuotaIncreaseRequestsInTemplateResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    service_quota_increase_request_in_template_list: Optional[list[shared_servicequotaincreaserequestintemplate.ServiceQuotaIncreaseRequestInTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceQuotaIncreaseRequestInTemplateList') }})
    
