import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listworkerswithqualificationtyperequest as shared_listworkerswithqualificationtyperequest
from ..shared import listworkerswithqualificationtyperesponse as shared_listworkerswithqualificationtyperesponse


@dataclasses.dataclass
class ListWorkersWithQualificationTypeQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListWorkersWithQualificationTypeXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_LIST_WORKERS_WITH_QUALIFICATION_TYPE = "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType"


@dataclasses.dataclass
class ListWorkersWithQualificationTypeHeaders:
    x_amz_target: ListWorkersWithQualificationTypeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListWorkersWithQualificationTypeRequest:
    headers: ListWorkersWithQualificationTypeHeaders = dataclasses.field()
    query_params: ListWorkersWithQualificationTypeQueryParams = dataclasses.field()
    request: shared_listworkerswithqualificationtyperequest.ListWorkersWithQualificationTypeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListWorkersWithQualificationTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_workers_with_qualification_type_response: Optional[shared_listworkerswithqualificationtyperesponse.ListWorkersWithQualificationTypeResponse] = dataclasses.field(default=None)
    request_error: Optional[Any] = dataclasses.field(default=None)
    service_fault: Optional[Any] = dataclasses.field(default=None)
    
