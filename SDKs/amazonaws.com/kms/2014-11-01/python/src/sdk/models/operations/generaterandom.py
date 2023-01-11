import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import generaterandomrequest as shared_generaterandomrequest
from ..shared import generaterandomresponse as shared_generaterandomresponse

class GenerateRandomXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_GENERATE_RANDOM = "TrentService.GenerateRandom"


@dataclasses.dataclass
class GenerateRandomHeaders:
    x_amz_target: GenerateRandomXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenerateRandomRequest:
    headers: GenerateRandomHeaders = dataclasses.field()
    request: shared_generaterandomrequest.GenerateRandomRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GenerateRandomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_key_store_invalid_state_exception: Optional[Any] = dataclasses.field(default=None)
    custom_key_store_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    dependency_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    generate_random_response: Optional[shared_generaterandomresponse.GenerateRandomResponse] = dataclasses.field(default=None)
    kms_internal_exception: Optional[Any] = dataclasses.field(default=None)
    
