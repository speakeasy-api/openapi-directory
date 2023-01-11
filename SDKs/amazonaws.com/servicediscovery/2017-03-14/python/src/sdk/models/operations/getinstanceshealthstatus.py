import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getinstanceshealthstatusrequest as shared_getinstanceshealthstatusrequest
from ..shared import getinstanceshealthstatusresponse as shared_getinstanceshealthstatusresponse


@dataclasses.dataclass
class GetInstancesHealthStatusQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetInstancesHealthStatusXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_GET_INSTANCES_HEALTH_STATUS = "Route53AutoNaming_v20170314.GetInstancesHealthStatus"


@dataclasses.dataclass
class GetInstancesHealthStatusHeaders:
    x_amz_target: GetInstancesHealthStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInstancesHealthStatusRequest:
    headers: GetInstancesHealthStatusHeaders = dataclasses.field()
    query_params: GetInstancesHealthStatusQueryParams = dataclasses.field()
    request: shared_getinstanceshealthstatusrequest.GetInstancesHealthStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetInstancesHealthStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_instances_health_status_response: Optional[shared_getinstanceshealthstatusresponse.GetInstancesHealthStatusResponse] = dataclasses.field(default=None)
    instance_not_found: Optional[Any] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    service_not_found: Optional[Any] = dataclasses.field(default=None)
    
