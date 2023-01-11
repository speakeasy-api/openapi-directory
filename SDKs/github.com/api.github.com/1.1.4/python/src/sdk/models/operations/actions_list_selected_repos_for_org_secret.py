import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import minimal_repository as shared_minimal_repository


@dataclasses.dataclass
class ActionsListSelectedReposForOrgSecretPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListSelectedReposForOrgSecretQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListSelectedReposForOrgSecret200ApplicationJSON:
    repositories: list[shared_minimal_repository.MinimalRepository] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListSelectedReposForOrgSecretRequest:
    path_params: ActionsListSelectedReposForOrgSecretPathParams = dataclasses.field()
    query_params: ActionsListSelectedReposForOrgSecretQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListSelectedReposForOrgSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_selected_repos_for_org_secret_200_application_json_object: Optional[ActionsListSelectedReposForOrgSecret200ApplicationJSON] = dataclasses.field(default=None)
    
