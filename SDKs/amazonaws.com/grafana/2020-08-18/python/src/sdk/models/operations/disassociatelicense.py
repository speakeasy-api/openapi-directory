"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import disassociatelicenseresponse as shared_disassociatelicenseresponse
from enum import Enum
from typing import Any, Optional

class DisassociateLicenseLicenseTypeEnum(str, Enum):
    r"""The type of license to remove from the workspace."""
    ENTERPRISE = 'ENTERPRISE'
    ENTERPRISE_FREE_TRIAL = 'ENTERPRISE_FREE_TRIAL'


@dataclasses.dataclass
class DisassociateLicenseRequest:
    
    license_type: DisassociateLicenseLicenseTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseType', 'style': 'simple', 'explode': False }})
    r"""The type of license to remove from the workspace."""  
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspaceId', 'style': 'simple', 'explode': False }})
    r"""The ID of the workspace to remove the Grafana Enterprise license from."""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class DisassociateLicenseResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    disassociate_license_response: Optional[shared_disassociatelicenseresponse.DisassociateLicenseResponse] = dataclasses.field(default=None)
    r"""Success"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    