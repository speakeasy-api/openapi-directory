import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getinstancerequest as shared_getinstancerequest
from ..shared import getinstanceresponse as shared_getinstanceresponse

class GetInstanceXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_GET_INSTANCE = "Route53AutoNaming_v20170314.GetInstance"


@dataclasses.dataclass
class GetInstanceHeaders:
    x_amz_target: GetInstanceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInstanceRequest:
    headers: GetInstanceHeaders = dataclasses.field()
    request: shared_getinstancerequest.GetInstanceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_instance_response: Optional[shared_getinstanceresponse.GetInstanceResponse] = dataclasses.field(default=None)
    instance_not_found: Optional[Any] = dataclasses.field(default=None)
    invalid_input: Optional[Any] = dataclasses.field(default=None)
    service_not_found: Optional[Any] = dataclasses.field(default=None)
    
