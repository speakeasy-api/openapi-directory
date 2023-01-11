import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import release_asset as shared_release_asset


@dataclasses.dataclass
class ReposGetReleaseAssetPathParams:
    asset_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposGetReleaseAsset415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposGetReleaseAssetRequest:
    path_params: ReposGetReleaseAssetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetReleaseAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    release_asset: Optional[shared_release_asset.ReleaseAsset] = dataclasses.field(default=None)
    repos_get_release_asset_415_application_json_object: Optional[ReposGetReleaseAsset415ApplicationJSON] = dataclasses.field(default=None)
    
