import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import enableenhancedmonitoringinput as shared_enableenhancedmonitoringinput
from ..shared import enhancedmonitoringoutput as shared_enhancedmonitoringoutput

class EnableEnhancedMonitoringXAmzTargetEnum(str, Enum):
    KINESIS_20131202_ENABLE_ENHANCED_MONITORING = "Kinesis_20131202.EnableEnhancedMonitoring"


@dataclasses.dataclass
class EnableEnhancedMonitoringHeaders:
    x_amz_target: EnableEnhancedMonitoringXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableEnhancedMonitoringRequest:
    headers: EnableEnhancedMonitoringHeaders = dataclasses.field()
    request: shared_enableenhancedmonitoringinput.EnableEnhancedMonitoringInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnableEnhancedMonitoringResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enhanced_monitoring_output: Optional[shared_enhancedmonitoringoutput.EnhancedMonitoringOutput] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
