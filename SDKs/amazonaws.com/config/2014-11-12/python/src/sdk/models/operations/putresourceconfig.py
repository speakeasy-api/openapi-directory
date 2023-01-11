import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putresourceconfigrequest as shared_putresourceconfigrequest

class PutResourceConfigXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_RESOURCE_CONFIG = "StarlingDoveService.PutResourceConfig"


@dataclasses.dataclass
class PutResourceConfigHeaders:
    x_amz_target: PutResourceConfigXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutResourceConfigRequest:
    headers: PutResourceConfigHeaders = dataclasses.field()
    request: shared_putresourceconfigrequest.PutResourceConfigRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutResourceConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insufficient_permissions_exception: Optional[Any] = dataclasses.field(default=None)
    max_active_resources_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    no_running_configuration_recorder_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
