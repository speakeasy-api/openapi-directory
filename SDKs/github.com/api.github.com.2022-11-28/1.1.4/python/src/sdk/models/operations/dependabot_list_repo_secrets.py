"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import dependabot_secret as shared_dependabot_secret
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class DependabotListRepoSecretsRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of results per page (max 100)."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DependabotListRepoSecrets200ApplicationJSON:
    r"""Response"""
    
    secrets: list[shared_dependabot_secret.DependabotSecret] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('secrets') }})  
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total_count') }})  
    

@dataclasses.dataclass
class DependabotListRepoSecretsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    dependabot_list_repo_secrets_200_application_json_object: Optional[DependabotListRepoSecrets200ApplicationJSON] = dataclasses.field(default=None)
    r"""Response"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    