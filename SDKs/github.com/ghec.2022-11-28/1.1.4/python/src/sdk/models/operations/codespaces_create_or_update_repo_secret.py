"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodespacesCreateOrUpdateRepoSecretRequestBody:
    
    encrypted_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('encrypted_value'), 'exclude': lambda f: f is None }})
    r"""Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-a-repository-public-key) endpoint."""  
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('key_id'), 'exclude': lambda f: f is None }})
    r"""ID of the key you used to encrypt the secret."""  
    

@dataclasses.dataclass
class CodespacesCreateOrUpdateRepoSecretRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    request_body: CodespacesCreateOrUpdateRepoSecretRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    r"""The name of the secret."""  
    

@dataclasses.dataclass
class CodespacesCreateOrUpdateRepoSecretResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    empty_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Response when creating a secret"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    