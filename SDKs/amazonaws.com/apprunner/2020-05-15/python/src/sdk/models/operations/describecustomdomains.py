"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import describecustomdomainsrequest as shared_describecustomdomainsrequest
from ..shared import describecustomdomainsresponse as shared_describecustomdomainsresponse
from enum import Enum
from typing import Any, Optional

class DescribeCustomDomainsXAmzTargetEnum(str, Enum):
    APP_RUNNER_DESCRIBE_CUSTOM_DOMAINS = 'AppRunner.DescribeCustomDomains'


@dataclasses.dataclass
class DescribeCustomDomainsRequest:
    
    describe_custom_domains_request: shared_describecustomdomainsrequest.DescribeCustomDomainsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: DescribeCustomDomainsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    r"""Pagination limit"""  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    r"""Pagination token"""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class DescribeCustomDomainsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    describe_custom_domains_response: Optional[shared_describecustomdomainsresponse.DescribeCustomDomainsResponse] = dataclasses.field(default=None)
    r"""Success"""  
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServiceErrorException"""  
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidRequestException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    