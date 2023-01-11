import dataclasses
from typing import Optional
from ..shared import behaviorentity as shared_behaviorentity


@dataclasses.dataclass
class GetBehaviorsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBehaviorsIDRequest:
    path_params: GetBehaviorsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBehaviorsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    behavior_entity: Optional[shared_behaviorentity.BehaviorEntity] = dataclasses.field(default=None)
    
