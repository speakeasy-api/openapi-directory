"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import listassessmentframeworksharerequestsresponse as shared_listassessmentframeworksharerequestsresponse
from enum import Enum
from typing import Any, Optional

class ListAssessmentFrameworkShareRequestsRequestTypeEnum(str, Enum):
    r"""Specifies whether the share request is a sent request or a received request."""
    SENT = 'SENT'
    RECEIVED = 'RECEIVED'


@dataclasses.dataclass
class ListAssessmentFrameworkShareRequestsRequest:
    
    request_type: ListAssessmentFrameworkShareRequestsRequestTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'requestType', 'style': 'form', 'explode': True }})
    r"""Specifies whether the share request is a sent request or a received request."""  
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    r"""Represents the maximum number of results on a page or for an API request call."""  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    r"""The pagination token that's used to fetch the next set of results."""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class ListAssessmentFrameworkShareRequestsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    list_assessment_framework_share_requests_response: Optional[shared_listassessmentframeworksharerequestsresponse.ListAssessmentFrameworkShareRequestsResponse] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    