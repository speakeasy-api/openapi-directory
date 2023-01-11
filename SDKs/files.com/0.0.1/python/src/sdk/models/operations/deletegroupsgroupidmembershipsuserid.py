import dataclasses



@dataclasses.dataclass
class DeleteGroupsGroupIDMembershipsUserIDPathParams:
    group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGroupsGroupIDMembershipsUserIDRequest:
    path_params: DeleteGroupsGroupIDMembershipsUserIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGroupsGroupIDMembershipsUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
