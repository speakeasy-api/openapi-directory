import dataclasses



@dataclasses.dataclass
class DeleteEnvironmentPathParams:
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEnvironmentRequest:
    path_params: DeleteEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
