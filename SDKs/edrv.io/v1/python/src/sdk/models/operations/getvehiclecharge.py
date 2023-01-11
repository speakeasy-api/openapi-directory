import dataclasses



@dataclasses.dataclass
class GetVehicleChargePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehicleChargeRequest:
    path_params: GetVehicleChargePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVehicleChargeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
