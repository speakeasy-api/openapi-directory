import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listhitsforqualificationtyperequest as shared_listhitsforqualificationtyperequest
from ..shared import listhitsforqualificationtyperesponse as shared_listhitsforqualificationtyperesponse


@dataclasses.dataclass
class ListHiTsForQualificationTypeQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListHiTsForQualificationTypeXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_LIST_HI_TS_FOR_QUALIFICATION_TYPE = "MTurkRequesterServiceV20170117.ListHITsForQualificationType"


@dataclasses.dataclass
class ListHiTsForQualificationTypeHeaders:
    x_amz_target: ListHiTsForQualificationTypeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListHiTsForQualificationTypeRequest:
    headers: ListHiTsForQualificationTypeHeaders = dataclasses.field()
    query_params: ListHiTsForQualificationTypeQueryParams = dataclasses.field()
    request: shared_listhitsforqualificationtyperequest.ListHiTsForQualificationTypeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListHiTsForQualificationTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_hi_ts_for_qualification_type_response: Optional[shared_listhitsforqualificationtyperesponse.ListHiTsForQualificationTypeResponse] = dataclasses.field(default=None)
    request_error: Optional[Any] = dataclasses.field(default=None)
    service_fault: Optional[Any] = dataclasses.field(default=None)
    
