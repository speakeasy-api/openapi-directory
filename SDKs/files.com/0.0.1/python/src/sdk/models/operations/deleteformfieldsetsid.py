import dataclasses



@dataclasses.dataclass
class DeleteFormFieldSetsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFormFieldSetsIDRequest:
    path_params: DeleteFormFieldSetsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFormFieldSetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
