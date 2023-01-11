import dataclasses



@dataclasses.dataclass
class RegistryDeleteArtifactPathParams:
    artifact: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryDeleteArtifactRequest:
    path_params: RegistryDeleteArtifactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryDeleteArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
