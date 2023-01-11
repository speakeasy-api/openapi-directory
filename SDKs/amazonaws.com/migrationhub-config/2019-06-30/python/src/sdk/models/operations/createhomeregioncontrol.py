import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createhomeregioncontrolrequest as shared_createhomeregioncontrolrequest
from ..shared import createhomeregioncontrolresult as shared_createhomeregioncontrolresult

class CreateHomeRegionControlXAmzTargetEnum(str, Enum):
    AWS_MIGRATION_HUB_MULTI_ACCOUNT_SERVICE_CREATE_HOME_REGION_CONTROL = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl"


@dataclasses.dataclass
class CreateHomeRegionControlHeaders:
    x_amz_target: CreateHomeRegionControlXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateHomeRegionControlRequest:
    headers: CreateHomeRegionControlHeaders = dataclasses.field()
    request: shared_createhomeregioncontrolrequest.CreateHomeRegionControlRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateHomeRegionControlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    create_home_region_control_result: Optional[shared_createhomeregioncontrolresult.CreateHomeRegionControlResult] = dataclasses.field(default=None)
    dry_run_operation: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
