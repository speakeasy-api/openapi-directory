"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import deletebranchresult as shared_deletebranchresult
from typing import Any, Optional


@dataclasses.dataclass
class DeleteBranchRequest:
    
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    r"""The unique ID for an Amplify app."""  
    branch_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branchName', 'style': 'simple', 'explode': False }})
    r"""The name for the branch."""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class DeleteBranchResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""BadRequestException"""  
    delete_branch_result: Optional[shared_deletebranchresult.DeleteBranchResult] = dataclasses.field(default=None)
    r"""Success"""  
    dependent_service_failure_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DependentServiceFailureException"""  
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalFailureException"""  
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""NotFoundException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    r"""UnauthorizedException"""  
    