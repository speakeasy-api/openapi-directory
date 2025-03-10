"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import disableenhancedmonitoringinput as shared_disableenhancedmonitoringinput
from ..shared import enhancedmonitoringoutput as shared_enhancedmonitoringoutput
from enum import Enum
from typing import Any, Optional

class DisableEnhancedMonitoringXAmzTargetEnum(str, Enum):
    KINESIS_20131202_DISABLE_ENHANCED_MONITORING = 'Kinesis_20131202.DisableEnhancedMonitoring'


@dataclasses.dataclass
class DisableEnhancedMonitoringRequest:
    
    disable_enhanced_monitoring_input: shared_disableenhancedmonitoringinput.DisableEnhancedMonitoringInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: DisableEnhancedMonitoringXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class DisableEnhancedMonitoringResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    enhanced_monitoring_output: Optional[shared_enhancedmonitoringoutput.EnhancedMonitoringOutput] = dataclasses.field(default=None)
    r"""Success"""  
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidArgumentException"""  
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    r"""LimitExceededException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceInUseException"""  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    