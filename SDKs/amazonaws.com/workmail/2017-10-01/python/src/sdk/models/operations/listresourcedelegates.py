import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listresourcedelegatesrequest as shared_listresourcedelegatesrequest
from ..shared import listresourcedelegatesresponse as shared_listresourcedelegatesresponse


@dataclasses.dataclass
class ListResourceDelegatesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListResourceDelegatesXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_LIST_RESOURCE_DELEGATES = "WorkMailService.ListResourceDelegates"


@dataclasses.dataclass
class ListResourceDelegatesHeaders:
    x_amz_target: ListResourceDelegatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListResourceDelegatesRequest:
    headers: ListResourceDelegatesHeaders = dataclasses.field()
    query_params: ListResourceDelegatesQueryParams = dataclasses.field()
    request: shared_listresourcedelegatesrequest.ListResourceDelegatesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListResourceDelegatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    entity_state_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    list_resource_delegates_response: Optional[shared_listresourcedelegatesresponse.ListResourceDelegatesResponse] = dataclasses.field(default=None)
    organization_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    organization_state_exception: Optional[Any] = dataclasses.field(default=None)
    
