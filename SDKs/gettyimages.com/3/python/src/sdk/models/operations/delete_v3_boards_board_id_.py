import dataclasses



@dataclasses.dataclass
class DeleteV3BoardsBoardIDPathParams:
    board_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDRequest:
    path_params: DeleteV3BoardsBoardIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteV3BoardsBoardIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
