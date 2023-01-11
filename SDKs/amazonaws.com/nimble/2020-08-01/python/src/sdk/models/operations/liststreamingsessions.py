import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import liststreamingsessionsresponse as shared_liststreamingsessionsresponse


@dataclasses.dataclass
class ListStreamingSessionsPathParams:
    studio_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListStreamingSessionsQueryParams:
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdBy', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    owned_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ownedBy', 'style': 'form', 'explode': True }})
    session_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sessionIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListStreamingSessionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListStreamingSessionsRequest:
    headers: ListStreamingSessionsHeaders = dataclasses.field()
    path_params: ListStreamingSessionsPathParams = dataclasses.field()
    query_params: ListStreamingSessionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListStreamingSessionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    list_streaming_sessions_response: Optional[shared_liststreamingsessionsresponse.ListStreamingSessionsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
