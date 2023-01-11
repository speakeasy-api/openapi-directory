import dataclasses
from typing import Optional
from ..shared import externalevententity as shared_externalevententity


@dataclasses.dataclass
class GetExternalEventsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExternalEventsIDRequest:
    path_params: GetExternalEventsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExternalEventsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    external_event_entity: Optional[shared_externalevententity.ExternalEventEntity] = dataclasses.field(default=None)
    
