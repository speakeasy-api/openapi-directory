import dataclasses



@dataclasses.dataclass
class ReposDeleteReleaseAssetPathParams:
    asset_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposDeleteReleaseAssetRequest:
    path_params: ReposDeleteReleaseAssetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposDeleteReleaseAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
