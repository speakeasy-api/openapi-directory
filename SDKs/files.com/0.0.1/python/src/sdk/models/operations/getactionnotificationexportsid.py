import dataclasses
from typing import Optional
from ..shared import actionnotificationexportentity as shared_actionnotificationexportentity


@dataclasses.dataclass
class GetActionNotificationExportsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActionNotificationExportsIDRequest:
    path_params: GetActionNotificationExportsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionNotificationExportsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_notification_export_entity: Optional[shared_actionnotificationexportentity.ActionNotificationExportEntity] = dataclasses.field(default=None)
    
