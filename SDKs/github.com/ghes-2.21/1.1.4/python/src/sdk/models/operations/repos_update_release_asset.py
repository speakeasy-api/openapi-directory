import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import release_asset as shared_release_asset


@dataclasses.dataclass
class ReposUpdateReleaseAssetPathParams:
    asset_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposUpdateReleaseAssetRequestBody:
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclasses.dataclass
class ReposUpdateReleaseAssetRequest:
    path_params: ReposUpdateReleaseAssetPathParams = dataclasses.field()
    request: Optional[ReposUpdateReleaseAssetRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposUpdateReleaseAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    release_asset: Optional[shared_release_asset.ReleaseAsset] = dataclasses.field(default=None)
    
