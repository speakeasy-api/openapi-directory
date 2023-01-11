import dataclasses



@dataclasses.dataclass
class RegistryGetArtifactContentsPathParams:
    artifact: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryGetArtifactContentsRequest:
    path_params: RegistryGetArtifactContentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryGetArtifactContentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
