import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startloggingrequest as shared_startloggingrequest

class StartLoggingXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_START_LOGGING = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging"


@dataclasses.dataclass
class StartLoggingHeaders:
    x_amz_target: StartLoggingXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartLoggingRequest:
    headers: StartLoggingHeaders = dataclasses.field()
    request: shared_startloggingrequest.StartLoggingRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartLoggingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insufficient_dependency_service_access_permission_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_home_region_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_trail_name_exception: Optional[Any] = dataclasses.field(default=None)
    not_organization_master_account_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    start_logging_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    trail_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
