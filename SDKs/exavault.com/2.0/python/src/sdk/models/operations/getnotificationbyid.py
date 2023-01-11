import dataclasses
from typing import Optional
from ..shared import notificationresponse as shared_notificationresponse


@dataclasses.dataclass
class GetNotificationByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNotificationByIDQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNotificationByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNotificationByIDRequest:
    headers: GetNotificationByIDHeaders = dataclasses.field()
    path_params: GetNotificationByIDPathParams = dataclasses.field()
    query_params: GetNotificationByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNotificationByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification_response: Optional[shared_notificationresponse.NotificationResponse] = dataclasses.field(default=None)
    
