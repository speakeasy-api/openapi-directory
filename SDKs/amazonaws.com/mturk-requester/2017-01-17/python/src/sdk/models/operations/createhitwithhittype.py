import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createhitwithhittyperequest as shared_createhitwithhittyperequest
from ..shared import createhitwithhittyperesponse as shared_createhitwithhittyperesponse

class CreateHitWithHitTypeXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_CREATE_HIT_WITH_HIT_TYPE = "MTurkRequesterServiceV20170117.CreateHITWithHITType"


@dataclasses.dataclass
class CreateHitWithHitTypeHeaders:
    x_amz_target: CreateHitWithHitTypeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateHitWithHitTypeRequest:
    headers: CreateHitWithHitTypeHeaders = dataclasses.field()
    request: shared_createhitwithhittyperequest.CreateHitWithHitTypeRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateHitWithHitTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_hit_with_hit_type_response: Optional[shared_createhitwithhittyperesponse.CreateHitWithHitTypeResponse] = dataclasses.field(default=None)
    request_error: Optional[Any] = dataclasses.field(default=None)
    service_fault: Optional[Any] = dataclasses.field(default=None)
    
