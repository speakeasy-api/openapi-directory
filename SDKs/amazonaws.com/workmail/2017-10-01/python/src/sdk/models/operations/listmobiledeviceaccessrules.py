import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listmobiledeviceaccessrulesrequest as shared_listmobiledeviceaccessrulesrequest
from ..shared import listmobiledeviceaccessrulesresponse as shared_listmobiledeviceaccessrulesresponse

class ListMobileDeviceAccessRulesXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_LIST_MOBILE_DEVICE_ACCESS_RULES = "WorkMailService.ListMobileDeviceAccessRules"


@dataclasses.dataclass
class ListMobileDeviceAccessRulesHeaders:
    x_amz_target: ListMobileDeviceAccessRulesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListMobileDeviceAccessRulesRequest:
    headers: ListMobileDeviceAccessRulesHeaders = dataclasses.field()
    request: shared_listmobiledeviceaccessrulesrequest.ListMobileDeviceAccessRulesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListMobileDeviceAccessRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    list_mobile_device_access_rules_response: Optional[shared_listmobiledeviceaccessrulesresponse.ListMobileDeviceAccessRulesResponse] = dataclasses.field(default=None)
    organization_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    organization_state_exception: Optional[Any] = dataclasses.field(default=None)
    
