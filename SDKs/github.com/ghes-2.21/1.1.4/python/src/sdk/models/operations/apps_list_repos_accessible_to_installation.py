import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class AppsListReposAccessibleToInstallationQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppsListReposAccessibleToInstallationHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppsListReposAccessibleToInstallation200ApplicationJSON:
    repositories: list[shared_repository.Repository] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    repository_selection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_selection') }})
    

@dataclasses.dataclass
class AppsListReposAccessibleToInstallationRequest:
    headers: AppsListReposAccessibleToInstallationHeaders = dataclasses.field()
    query_params: AppsListReposAccessibleToInstallationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsListReposAccessibleToInstallationResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    apps_list_repos_accessible_to_installation_200_application_json_object: Optional[AppsListReposAccessibleToInstallation200ApplicationJSON] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
