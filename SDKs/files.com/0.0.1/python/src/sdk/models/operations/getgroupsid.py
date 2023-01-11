import dataclasses
from typing import Optional
from ..shared import groupentity as shared_groupentity


@dataclasses.dataclass
class GetGroupsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupsIDRequest:
    path_params: GetGroupsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_entity: Optional[shared_groupentity.GroupEntity] = dataclasses.field(default=None)
    
