"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody:
    
    runners: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('runners') }})
    r"""List of runner IDs to add to the runner group."""  
    

@dataclasses.dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})  
    request_body: ActionsSetSelfHostedRunnersInGroupForOrgRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    r"""Unique identifier of the self-hosted runner group."""  
    

@dataclasses.dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    