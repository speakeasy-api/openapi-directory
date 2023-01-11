import dataclasses



@dataclasses.dataclass
class DeleteAs2KeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAs2KeysIDRequest:
    path_params: DeleteAs2KeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAs2KeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
