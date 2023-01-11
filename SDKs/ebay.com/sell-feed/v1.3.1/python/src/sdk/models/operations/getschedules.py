import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import userschedulecollection as shared_userschedulecollection


@dataclasses.dataclass
class GetSchedulesQueryParams:
    feed_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSchedulesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSchedulesRequest:
    query_params: GetSchedulesQueryParams = dataclasses.field()
    security: GetSchedulesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSchedulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_schedule_collection: Optional[shared_userschedulecollection.UserScheduleCollection] = dataclasses.field(default=None)
    
