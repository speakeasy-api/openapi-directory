import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import automationentity as shared_automationentity

class PostAutomationsRequestBodyAutomationEnum(str, Enum):
    CREATE_FOLDER = "create_folder"
    REQUEST_FILE = "request_file"
    REQUEST_MOVE = "request_move"
    COPY_NEWEST_FILE = "copy_newest_file"
    DELETE_FILE = "delete_file"
    COPY_FILE = "copy_file"
    MOVE_FILE = "move_file"

class PostAutomationsRequestBodyTriggerEnum(str, Enum):
    REALTIME = "realtime"
    DAILY = "daily"
    CUSTOM_SCHEDULE = "custom_schedule"
    WEBHOOK = "webhook"
    EMAIL = "email"
    ACTION = "action"


@dataclasses.dataclass
class PostAutomationsRequestBody:
    automation: PostAutomationsRequestBodyAutomationEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'automation' }})
    destination: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'destination' }})
    destination_replace_from: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'destination_replace_from' }})
    destination_replace_to: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'destination_replace_to' }})
    destinations: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'destinations', 'json': True }})
    group_ids: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'group_ids' }})
    interval: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'interval' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    schedule: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'schedule', 'json': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'source' }})
    trigger: Optional[PostAutomationsRequestBodyTriggerEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'trigger' }})
    trigger_action_path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'trigger_action_path' }})
    trigger_actions: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'trigger_actions', 'json': True }})
    user_ids: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_ids' }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'value', 'json': True }})
    

@dataclasses.dataclass
class PostAutomationsRequest:
    request: PostAutomationsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostAutomationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    automation_entity: Optional[shared_automationentity.AutomationEntity] = dataclasses.field(default=None)
    
