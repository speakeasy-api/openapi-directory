import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putconformancepackrequest as shared_putconformancepackrequest
from ..shared import putconformancepackresponse as shared_putconformancepackresponse

class PutConformancePackXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_CONFORMANCE_PACK = "StarlingDoveService.PutConformancePack"


@dataclasses.dataclass
class PutConformancePackHeaders:
    x_amz_target: PutConformancePackXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConformancePackRequest:
    headers: PutConformancePackHeaders = dataclasses.field()
    request: shared_putconformancepackrequest.PutConformancePackRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutConformancePackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conformance_pack_template_validation_exception: Optional[Any] = dataclasses.field(default=None)
    insufficient_permissions_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    max_number_of_conformance_packs_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    put_conformance_pack_response: Optional[shared_putconformancepackresponse.PutConformancePackResponse] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    
