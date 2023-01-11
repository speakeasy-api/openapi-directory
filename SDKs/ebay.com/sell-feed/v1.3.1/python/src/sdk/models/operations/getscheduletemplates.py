import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scheduletemplatecollection as shared_scheduletemplatecollection


@dataclasses.dataclass
class GetScheduleTemplatesQueryParams:
    feed_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScheduleTemplatesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScheduleTemplatesRequest:
    query_params: GetScheduleTemplatesQueryParams = dataclasses.field()
    security: GetScheduleTemplatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScheduleTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_template_collection: Optional[shared_scheduletemplatecollection.ScheduleTemplateCollection] = dataclasses.field(default=None)
    
