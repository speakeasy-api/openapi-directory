import dataclasses



@dataclasses.dataclass
class DeleteGroupsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGroupsIDRequest:
    path_params: DeleteGroupsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
