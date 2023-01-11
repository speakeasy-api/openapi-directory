import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import meterusagerequest as shared_meterusagerequest
from ..shared import meterusageresult as shared_meterusageresult

class MeterUsageXAmzTargetEnum(str, Enum):
    AWSMP_METERING_SERVICE_METER_USAGE = "AWSMPMeteringService.MeterUsage"


@dataclasses.dataclass
class MeterUsageHeaders:
    x_amz_target: MeterUsageXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeterUsageRequest:
    headers: MeterUsageHeaders = dataclasses.field()
    request: shared_meterusagerequest.MeterUsageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MeterUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_not_entitled_exception: Optional[Any] = dataclasses.field(default=None)
    duplicate_request_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_endpoint_region_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_product_code_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_tag_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_usage_allocations_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_usage_dimension_exception: Optional[Any] = dataclasses.field(default=None)
    meter_usage_result: Optional[shared_meterusageresult.MeterUsageResult] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    timestamp_out_of_bounds_exception: Optional[Any] = dataclasses.field(default=None)
    
