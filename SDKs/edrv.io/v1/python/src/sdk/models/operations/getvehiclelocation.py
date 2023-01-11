import dataclasses



@dataclasses.dataclass
class GetVehicleLocationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVehicleLocationRequest:
    path_params: GetVehicleLocationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVehicleLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
