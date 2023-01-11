import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import app_permissions as shared_app_permissions
from ..shared import basic_error as shared_basic_error
from ..shared import installation_token as shared_installation_token
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class AppsCreateInstallationAccessTokenPathParams:
    installation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsCreateInstallationAccessTokenHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppsCreateInstallationAccessTokenRequestBody:
    permissions: Optional[shared_app_permissions.AppPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    repositories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    repository_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_ids') }})
    

@dataclass_json
@dataclasses.dataclass
class AppsCreateInstallationAccessToken415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class AppsCreateInstallationAccessTokenRequest:
    headers: AppsCreateInstallationAccessTokenHeaders = dataclasses.field()
    path_params: AppsCreateInstallationAccessTokenPathParams = dataclasses.field()
    request: Optional[AppsCreateInstallationAccessTokenRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppsCreateInstallationAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    apps_create_installation_access_token_415_application_json_object: Optional[AppsCreateInstallationAccessToken415ApplicationJSON] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    installation_token: Optional[shared_installation_token.InstallationToken] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
