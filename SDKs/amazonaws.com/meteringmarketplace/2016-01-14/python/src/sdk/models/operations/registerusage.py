import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import registerusagerequest as shared_registerusagerequest
from ..shared import registerusageresult as shared_registerusageresult

class RegisterUsageXAmzTargetEnum(str, Enum):
    AWSMP_METERING_SERVICE_REGISTER_USAGE = "AWSMPMeteringService.RegisterUsage"


@dataclasses.dataclass
class RegisterUsageHeaders:
    x_amz_target: RegisterUsageXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegisterUsageRequest:
    headers: RegisterUsageHeaders = dataclasses.field()
    request: shared_registerusagerequest.RegisterUsageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_not_entitled_exception: Optional[Any] = dataclasses.field(default=None)
    disabled_api_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_product_code_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_public_key_version_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_region_exception: Optional[Any] = dataclasses.field(default=None)
    platform_not_supported_exception: Optional[Any] = dataclasses.field(default=None)
    register_usage_result: Optional[shared_registerusageresult.RegisterUsageResult] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
