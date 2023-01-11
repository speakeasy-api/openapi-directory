import dataclasses
from typing import Optional
from ..shared import actionnotificationexportresultentity as shared_actionnotificationexportresultentity


@dataclasses.dataclass
class GetActionNotificationExportResultsQueryParams:
    action_notification_export_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'action_notification_export_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionNotificationExportResultsRequest:
    query_params: GetActionNotificationExportResultsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionNotificationExportResultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_notification_export_result_entities: Optional[list[shared_actionnotificationexportresultentity.ActionNotificationExportResultEntity]] = dataclasses.field(default=None)
    
