import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actions_secret as shared_actions_secret


@dataclasses.dataclass
class ActionsListEnvironmentSecretsPathParams:
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListEnvironmentSecretsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListEnvironmentSecrets200ApplicationJSON:
    secrets: list[shared_actions_secret.ActionsSecret] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListEnvironmentSecretsRequest:
    path_params: ActionsListEnvironmentSecretsPathParams = dataclasses.field()
    query_params: ActionsListEnvironmentSecretsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListEnvironmentSecretsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_environment_secrets_200_application_json_object: Optional[ActionsListEnvironmentSecrets200ApplicationJSON] = dataclasses.field(default=None)
    
