import dataclasses



@dataclasses.dataclass
class ActionsDownloadArtifactPathParams:
    archive_format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'archive_format', 'style': 'simple', 'explode': False }})
    artifact_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'artifact_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDownloadArtifactRequest:
    path_params: ActionsDownloadArtifactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDownloadArtifactResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
