import dataclasses
from typing import Optional
from ..shared import release_asset as shared_release_asset


REPOS_UPLOAD_RELEASE_ASSET_SERVERS = [
	"https://{origin}",
]


@dataclasses.dataclass
class ReposUploadReleaseAssetPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposUploadReleaseAssetQueryParams:
    label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposUploadReleaseAssetRequest:
    path_params: ReposUploadReleaseAssetPathParams = dataclasses.field()
    query_params: ReposUploadReleaseAssetQueryParams = dataclasses.field()
    request: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': '*/*' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ReposUploadReleaseAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    release_asset: Optional[shared_release_asset.ReleaseAsset] = dataclasses.field(default=None)
    
