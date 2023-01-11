import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateStandardsControlPathParams:
    standards_control_arn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'StandardsControlArn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateStandardsControlHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateStandardsControlRequestBodyControlStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class UpdateStandardsControlRequestBody:
    control_status: Optional[UpdateStandardsControlRequestBodyControlStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlStatus') }})
    disabled_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisabledReason') }})
    

@dataclasses.dataclass
class UpdateStandardsControlRequest:
    headers: UpdateStandardsControlHeaders = dataclasses.field()
    path_params: UpdateStandardsControlPathParams = dataclasses.field()
    request: UpdateStandardsControlRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateStandardsControlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_access_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_standards_control_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
