import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import installation as shared_installation
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class AppsListInstallationsForAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AppsListInstallationsForAuthenticatedUser200ApplicationJSON:
    installations: list[shared_installation.Installation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('installations') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclasses.dataclass
class AppsListInstallationsForAuthenticatedUser415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class AppsListInstallationsForAuthenticatedUserRequest:
    query_params: AppsListInstallationsForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsListInstallationsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    apps_list_installations_for_authenticated_user_200_application_json_object: Optional[AppsListInstallationsForAuthenticatedUser200ApplicationJSON] = dataclasses.field(default=None)
    apps_list_installations_for_authenticated_user_415_application_json_object: Optional[AppsListInstallationsForAuthenticatedUser415ApplicationJSON] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
