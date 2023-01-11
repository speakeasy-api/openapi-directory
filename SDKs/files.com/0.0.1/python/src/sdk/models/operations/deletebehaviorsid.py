import dataclasses



@dataclasses.dataclass
class DeleteBehaviorsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBehaviorsIDRequest:
    path_params: DeleteBehaviorsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBehaviorsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
