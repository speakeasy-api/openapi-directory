import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putconfigurationrecorderrequest as shared_putconfigurationrecorderrequest

class PutConfigurationRecorderXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_CONFIGURATION_RECORDER = "StarlingDoveService.PutConfigurationRecorder"


@dataclasses.dataclass
class PutConfigurationRecorderHeaders:
    x_amz_target: PutConfigurationRecorderXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConfigurationRecorderRequest:
    headers: PutConfigurationRecorderHeaders = dataclasses.field()
    request: shared_putconfigurationrecorderrequest.PutConfigurationRecorderRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutConfigurationRecorderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_configuration_recorder_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_recording_group_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_role_exception: Optional[Any] = dataclasses.field(default=None)
    max_number_of_configuration_recorders_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
