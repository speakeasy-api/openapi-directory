import dataclasses
from typing import Optional
from ..shared import scheduleautoimportrequest as shared_scheduleautoimportrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class AutoScheduleAutoImportPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AutoScheduleAutoImportRequest:
    path_params: AutoScheduleAutoImportPathParams = dataclasses.field()
    request: shared_scheduleautoimportrequest.ScheduleAutoImportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AutoScheduleAutoImportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
