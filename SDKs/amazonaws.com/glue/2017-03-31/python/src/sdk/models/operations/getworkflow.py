"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import getworkflowrequest as shared_getworkflowrequest
from ..shared import getworkflowresponse as shared_getworkflowresponse
from enum import Enum
from typing import Any, Optional

class GetWorkflowXAmzTargetEnum(str, Enum):
    AWS_GLUE_GET_WORKFLOW = 'AWSGlue.GetWorkflow'


@dataclasses.dataclass
class GetWorkflowRequest:
    
    get_workflow_request: shared_getworkflowrequest.GetWorkflowRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: GetWorkflowXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GetWorkflowResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""EntityNotFoundException"""  
    get_workflow_response: Optional[shared_getworkflowresponse.GetWorkflowResponse] = dataclasses.field(default=None)
    r"""Success"""  
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServiceException"""  
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidInputException"""  
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    r"""OperationTimeoutException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    