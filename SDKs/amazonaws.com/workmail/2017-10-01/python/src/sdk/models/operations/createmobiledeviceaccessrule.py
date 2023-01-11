import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createmobiledeviceaccessrulerequest as shared_createmobiledeviceaccessrulerequest
from ..shared import createmobiledeviceaccessruleresponse as shared_createmobiledeviceaccessruleresponse

class CreateMobileDeviceAccessRuleXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_CREATE_MOBILE_DEVICE_ACCESS_RULE = "WorkMailService.CreateMobileDeviceAccessRule"


@dataclasses.dataclass
class CreateMobileDeviceAccessRuleHeaders:
    x_amz_target: CreateMobileDeviceAccessRuleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMobileDeviceAccessRuleRequest:
    headers: CreateMobileDeviceAccessRuleHeaders = dataclasses.field()
    request: shared_createmobiledeviceaccessrulerequest.CreateMobileDeviceAccessRuleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateMobileDeviceAccessRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_mobile_device_access_rule_response: Optional[shared_createmobiledeviceaccessruleresponse.CreateMobileDeviceAccessRuleResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    organization_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    organization_state_exception: Optional[Any] = dataclasses.field(default=None)
    
