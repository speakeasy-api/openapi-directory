import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listgrantsrequest as shared_listgrantsrequest
from ..shared import listgrantsresponse as shared_listgrantsresponse


@dataclasses.dataclass
class ListGrantsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    
class ListGrantsXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_LIST_GRANTS = "TrentService.ListGrants"


@dataclasses.dataclass
class ListGrantsHeaders:
    x_amz_target: ListGrantsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListGrantsRequest:
    headers: ListGrantsHeaders = dataclasses.field()
    query_params: ListGrantsQueryParams = dataclasses.field()
    request: shared_listgrantsrequest.ListGrantsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListGrantsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dependency_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_grant_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_marker_exception: Optional[Any] = dataclasses.field(default=None)
    kms_internal_exception: Optional[Any] = dataclasses.field(default=None)
    kms_invalid_state_exception: Optional[Any] = dataclasses.field(default=None)
    list_grants_response: Optional[shared_listgrantsresponse.ListGrantsResponse] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
