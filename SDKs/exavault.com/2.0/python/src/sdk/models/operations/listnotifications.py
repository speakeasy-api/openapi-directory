import dataclasses
from typing import Optional
from enum import Enum
from ..shared import notificationcollectionresponse as shared_notificationcollectionresponse

class ListNotificationsActionEnum(str, Enum):
    CONNECT = "connect"
    DOWNLOAD = "download"
    UPLOAD = "upload"
    DELETE = "delete"
    ALL = "all"

class ListNotificationsIncludeEnum(str, Enum):
    RESOURCE = "resource"
    SHARE = "share"
    USER = "user"

class ListNotificationsTypeEnum(str, Enum):
    FILE = "file"
    FOLDER = "folder"
    SHARED_FOLDER = "shared_folder"
    SEND_RECEIPT = "send_receipt"
    SHARE_RECEIPT = "share_receipt"
    FILE_DROP = "file_drop"


@dataclasses.dataclass
class ListNotificationsQueryParams:
    action: Optional[ListNotificationsActionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    include: Optional[ListNotificationsIncludeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[ListNotificationsTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListNotificationsHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListNotificationsRequest:
    headers: ListNotificationsHeaders = dataclasses.field()
    query_params: ListNotificationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListNotificationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notification_collection_response: Optional[shared_notificationcollectionresponse.NotificationCollectionResponse] = dataclasses.field(default=None)
    
