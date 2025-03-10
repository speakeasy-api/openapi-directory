"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import listvectorenrichmentjoboutput as shared_listvectorenrichmentjoboutput
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Any, Optional

class ListVectorEnrichmentJobsRequestBodySortOrderEnum(str, Enum):
    r"""An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order."""
    ASCENDING = 'ASCENDING'
    DESCENDING = 'DESCENDING'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListVectorEnrichmentJobsRequestBody:
    
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MaxResults'), 'exclude': lambda f: f is None }})
    r"""The maximum number of items to return."""  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NextToken'), 'exclude': lambda f: f is None }})
    r"""If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results."""  
    sort_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SortBy'), 'exclude': lambda f: f is None }})
    r"""The parameter by which to sort the results."""  
    sort_order: Optional[ListVectorEnrichmentJobsRequestBodySortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SortOrder'), 'exclude': lambda f: f is None }})
    r"""An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order."""  
    status_equals: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StatusEquals'), 'exclude': lambda f: f is None }})
    r"""A filter that retrieves only jobs with a specific status."""  
    

@dataclasses.dataclass
class ListVectorEnrichmentJobsRequest:
    
    request_body: ListVectorEnrichmentJobsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
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
class ListVectorEnrichmentJobsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    list_vector_enrichment_job_output: Optional[shared_listvectorenrichmentjoboutput.ListVectorEnrichmentJobOutput] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    