import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listactiveviolationsresponse as shared_listactiveviolationsresponse

class ListActiveViolationsBehaviorCriteriaTypeEnum(str, Enum):
    STATIC = "STATIC"
    STATISTICAL = "STATISTICAL"
    MACHINE_LEARNING = "MACHINE_LEARNING"


@dataclasses.dataclass
class ListActiveViolationsQueryParams:
    behavior_criteria_type: Optional[ListActiveViolationsBehaviorCriteriaTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'behaviorCriteriaType', 'style': 'form', 'explode': True }})
    list_suppressed_alerts: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'listSuppressedAlerts', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    security_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'securityProfileName', 'style': 'form', 'explode': True }})
    thing_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'thingName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListActiveViolationsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListActiveViolationsRequest:
    headers: ListActiveViolationsHeaders = dataclasses.field()
    query_params: ListActiveViolationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListActiveViolationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_active_violations_response: Optional[shared_listactiveviolationsresponse.ListActiveViolationsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
