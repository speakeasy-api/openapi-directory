import dataclasses



@dataclasses.dataclass
class GetVehicleOdometerPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehicleOdometerRequest:
    path_params: GetVehicleOdometerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVehicleOdometerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
