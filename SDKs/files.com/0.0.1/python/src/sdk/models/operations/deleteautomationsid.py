import dataclasses



@dataclasses.dataclass
class DeleteAutomationsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAutomationsIDRequest:
    path_params: DeleteAutomationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAutomationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
