import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import actionnotificationexportentity as shared_actionnotificationexportentity


@dataclasses.dataclass
class PostActionNotificationExportsRequestBody:
    end_at: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'end_at' }})
    query_folder: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_folder' }})
    query_message: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_message' }})
    query_path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_path' }})
    query_request_method: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_request_method' }})
    query_request_url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_request_url' }})
    query_status: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_status' }})
    query_success: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_success' }})
    start_at: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'start_at' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostActionNotificationExportsRequest:
    request: Optional[PostActionNotificationExportsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostActionNotificationExportsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_notification_export_entity: Optional[shared_actionnotificationexportentity.ActionNotificationExportEntity] = dataclasses.field(default=None)
    
