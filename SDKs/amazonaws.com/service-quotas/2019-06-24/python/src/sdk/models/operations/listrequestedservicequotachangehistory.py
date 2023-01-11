import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listrequestedservicequotachangehistoryrequest as shared_listrequestedservicequotachangehistoryrequest
from ..shared import listrequestedservicequotachangehistoryresponse as shared_listrequestedservicequotachangehistoryresponse


@dataclasses.dataclass
class ListRequestedServiceQuotaChangeHistoryQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory"


@dataclasses.dataclass
class ListRequestedServiceQuotaChangeHistoryHeaders:
    x_amz_target: ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRequestedServiceQuotaChangeHistoryRequest:
    headers: ListRequestedServiceQuotaChangeHistoryHeaders = dataclasses.field()
    query_params: ListRequestedServiceQuotaChangeHistoryQueryParams = dataclasses.field()
    request: shared_listrequestedservicequotachangehistoryrequest.ListRequestedServiceQuotaChangeHistoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListRequestedServiceQuotaChangeHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    illegal_argument_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_pagination_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_requested_service_quota_change_history_response: Optional[shared_listrequestedservicequotachangehistoryresponse.ListRequestedServiceQuotaChangeHistoryResponse] = dataclasses.field(default=None)
    no_such_resource_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
