import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import searchsystemtemplatesrequest as shared_searchsystemtemplatesrequest
from ..shared import searchsystemtemplatesresponse as shared_searchsystemtemplatesresponse


@dataclasses.dataclass
class SearchSystemTemplatesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class SearchSystemTemplatesXAmzTargetEnum(str, Enum):
    IOT_THINGS_GRAPH_FRONT_END_SERVICE_SEARCH_SYSTEM_TEMPLATES = "IotThingsGraphFrontEndService.SearchSystemTemplates"


@dataclasses.dataclass
class SearchSystemTemplatesHeaders:
    x_amz_target: SearchSystemTemplatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchSystemTemplatesRequest:
    headers: SearchSystemTemplatesHeaders = dataclasses.field()
    query_params: SearchSystemTemplatesQueryParams = dataclasses.field()
    request: shared_searchsystemtemplatesrequest.SearchSystemTemplatesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SearchSystemTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    search_system_templates_response: Optional[shared_searchsystemtemplatesresponse.SearchSystemTemplatesResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
