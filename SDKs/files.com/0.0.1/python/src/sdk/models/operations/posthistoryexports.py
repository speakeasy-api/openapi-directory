import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import historyexportentity as shared_historyexportentity


@dataclasses.dataclass
class PostHistoryExportsRequestBody:
    end_at: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'end_at' }})
    query_action: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_action' }})
    query_destination: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_destination' }})
    query_failure_type: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_failure_type' }})
    query_file_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_file_id' }})
    query_folder: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_folder' }})
    query_interface: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_interface' }})
    query_ip: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_ip' }})
    query_parent_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_parent_id' }})
    query_path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_path' }})
    query_src: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_src' }})
    query_target_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_id' }})
    query_target_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_name' }})
    query_target_permission: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_permission' }})
    query_target_permission_set: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_permission_set' }})
    query_target_platform: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_platform' }})
    query_target_user_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_user_id' }})
    query_target_username: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_target_username' }})
    query_user_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_user_id' }})
    query_username: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'query_username' }})
    start_at: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'start_at' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostHistoryExportsRequest:
    request: Optional[PostHistoryExportsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostHistoryExportsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    history_export_entity: Optional[shared_historyexportentity.HistoryExportEntity] = dataclasses.field(default=None)
    
