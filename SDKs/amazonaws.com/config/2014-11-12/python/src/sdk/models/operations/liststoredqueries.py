import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import liststoredqueriesrequest as shared_liststoredqueriesrequest
from ..shared import liststoredqueriesresponse as shared_liststoredqueriesresponse


@dataclasses.dataclass
class ListStoredQueriesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListStoredQueriesXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_LIST_STORED_QUERIES = "StarlingDoveService.ListStoredQueries"


@dataclasses.dataclass
class ListStoredQueriesHeaders:
    x_amz_target: ListStoredQueriesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListStoredQueriesRequest:
    headers: ListStoredQueriesHeaders = dataclasses.field()
    query_params: ListStoredQueriesQueryParams = dataclasses.field()
    request: shared_liststoredqueriesrequest.ListStoredQueriesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListStoredQueriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_stored_queries_response: Optional[shared_liststoredqueriesresponse.ListStoredQueriesResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
