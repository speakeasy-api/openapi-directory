"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import registerslackworkspacefororganizationresult as shared_registerslackworkspacefororganizationresult
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RegisterSlackWorkspaceForOrganizationRequestBody:
    
    team_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teamId') }})
    r"""The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>. Specify the Slack workspace that you want to use for your organization."""  
    

@dataclasses.dataclass
class RegisterSlackWorkspaceForOrganizationRequest:
    
    request_body: RegisterSlackWorkspaceForOrganizationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class RegisterSlackWorkspaceForOrganizationResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ConflictException"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    register_slack_workspace_for_organization_result: Optional[shared_registerslackworkspacefororganizationresult.RegisterSlackWorkspaceForOrganizationResult] = dataclasses.field(default=None)
    r"""Success"""  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    