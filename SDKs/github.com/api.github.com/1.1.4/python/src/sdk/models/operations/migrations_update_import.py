import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import import_ as shared_import_


@dataclasses.dataclass
class MigrationsUpdateImportPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class MigrationsUpdateImportRequestBody:
    tfvc_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tfvc_project') }})
    vcs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs') }})
    vcs_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_password') }})
    vcs_username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_username') }})
    

@dataclasses.dataclass
class MigrationsUpdateImportRequest:
    path_params: MigrationsUpdateImportPathParams = dataclasses.field()
    request: Optional[MigrationsUpdateImportRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MigrationsUpdateImportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_: Optional[shared_import_.Import] = dataclasses.field(default=None)
    
