"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ActionsReRunWorkflowFailedJobsRequestBody:
    
    enable_debug_logging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enable_debug_logging'), 'exclude': lambda f: f is None }})
    r"""Whether to enable debug logging for the re-run."""  
    

@dataclasses.dataclass
class ActionsReRunWorkflowFailedJobsRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the workflow run."""  
    request_body: Optional[ActionsReRunWorkflowFailedJobsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class ActionsReRunWorkflowFailedJobsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    empty_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    