import dataclasses



@dataclasses.dataclass
class ReposDownloadTarballArchivePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposDownloadTarballArchiveRequest:
    path_params: ReposDownloadTarballArchivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposDownloadTarballArchiveResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
