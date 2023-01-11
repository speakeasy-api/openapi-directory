import dataclasses



@dataclasses.dataclass
class DeleteChargeStationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteChargeStationRequest:
    path_params: DeleteChargeStationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteChargeStationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
