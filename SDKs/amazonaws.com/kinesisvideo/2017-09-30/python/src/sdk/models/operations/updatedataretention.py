import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDataRetentionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateDataRetentionRequestBodyOperationEnum(str, Enum):
    INCREASE_DATA_RETENTION = "INCREASE_DATA_RETENTION"
    DECREASE_DATA_RETENTION = "DECREASE_DATA_RETENTION"


@dataclass_json
@dataclasses.dataclass
class UpdateDataRetentionRequestBody:
    current_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentVersion') }})
    data_retention_change_in_hours: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRetentionChangeInHours') }})
    operation: UpdateDataRetentionRequestBodyOperationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    stream_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    

@dataclasses.dataclass
class UpdateDataRetentionRequest:
    headers: UpdateDataRetentionHeaders = dataclasses.field()
    request: UpdateDataRetentionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDataRetentionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_data_retention_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    version_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    
