import dataclasses



@dataclasses.dataclass
class GetVehicleBatteryPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehicleBatteryRequest:
    path_params: GetVehicleBatteryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVehicleBatteryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
