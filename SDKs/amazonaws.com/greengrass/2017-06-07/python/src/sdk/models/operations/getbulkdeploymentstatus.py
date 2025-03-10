"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import getbulkdeploymentstatusresponse as shared_getbulkdeploymentstatusresponse
from typing import Any, Optional


@dataclasses.dataclass
class GetBulkDeploymentStatusRequest:
    
    bulk_deployment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BulkDeploymentId', 'style': 'simple', 'explode': False }})
    r"""The ID of the bulk deployment."""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GetBulkDeploymentStatusResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""BadRequestException"""  
    get_bulk_deployment_status_response: Optional[shared_getbulkdeploymentstatusresponse.GetBulkDeploymentStatusResponse] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    