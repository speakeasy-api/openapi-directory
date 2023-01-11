import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateinstancecustomhealthstatusrequest as shared_updateinstancecustomhealthstatusrequest

class UpdateInstanceCustomHealthStatusXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_UPDATE_INSTANCE_CUSTOM_HEALTH_STATUS = "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus"


@dataclasses.dataclass
class UpdateInstanceCustomHealthStatusHeaders:
    x_amz_target: UpdateInstanceCustomHealthStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateInstanceCustomHealthStatusRequest:
    headers: UpdateInstanceCustomHealthStatusHeaders = dataclasses.field()
    request: shared_updateinstancecustomhealthstatusrequest.UpdateInstanceCustomHealthStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateInstanceCustomHealthStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_health_not_found: Optional[Any] = dataclasses.field(default=None)
    instance_not_found: Optional[Any] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    service_not_found: Optional[Any] = dataclasses.field(default=None)
    
