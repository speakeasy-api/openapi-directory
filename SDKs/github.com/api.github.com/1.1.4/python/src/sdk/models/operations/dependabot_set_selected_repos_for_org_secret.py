"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DependabotSetSelectedReposForOrgSecretRequestBody:
    
    selected_repository_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('selected_repository_ids') }})
    r"""An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret) endpoints."""  
    

@dataclasses.dataclass
class DependabotSetSelectedReposForOrgSecretRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    r"""The organization name. The name is not case sensitive."""  
    request_body: DependabotSetSelectedReposForOrgSecretRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    r"""The name of the secret."""  
    

@dataclasses.dataclass
class DependabotSetSelectedReposForOrgSecretResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    