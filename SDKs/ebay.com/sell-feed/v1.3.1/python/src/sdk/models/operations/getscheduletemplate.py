import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scheduletemplateresponse as shared_scheduletemplateresponse


@dataclasses.dataclass
class GetScheduleTemplatePathParams:
    schedule_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schedule_template_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScheduleTemplateSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScheduleTemplateRequest:
    path_params: GetScheduleTemplatePathParams = dataclasses.field()
    security: GetScheduleTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScheduleTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_template_response: Optional[shared_scheduletemplateresponse.ScheduleTemplateResponse] = dataclasses.field(default=None)
    
