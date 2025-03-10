"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import listapplicationdpusizesinput as shared_listapplicationdpusizesinput
from ..shared import listapplicationdpusizesoutput as shared_listapplicationdpusizesoutput
from enum import Enum
from typing import Any, Optional

class ListApplicationDPUSizesXAmzTargetEnum(str, Enum):
    AMAZON_ATHENA_LIST_APPLICATION_DPU_SIZES = 'AmazonAthena.ListApplicationDPUSizes'


@dataclasses.dataclass
class ListApplicationDPUSizesRequest:
    
    list_application_dpu_sizes_input: shared_listapplicationdpusizesinput.ListApplicationDPUSizesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: ListApplicationDPUSizesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
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
class ListApplicationDPUSizesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidRequestException"""  
    list_application_dpu_sizes_output: Optional[shared_listapplicationdpusizesoutput.ListApplicationDPUSizesOutput] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    r"""TooManyRequestsException"""  
    