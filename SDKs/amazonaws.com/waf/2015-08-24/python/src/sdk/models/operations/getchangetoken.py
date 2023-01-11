import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getchangetokenresponse as shared_getchangetokenresponse

class GetChangeTokenXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_GET_CHANGE_TOKEN = "AWSWAF_20150824.GetChangeToken"


@dataclasses.dataclass
class GetChangeTokenHeaders:
    x_amz_target: GetChangeTokenXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChangeTokenRequest:
    headers: GetChangeTokenHeaders = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetChangeTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_change_token_response: Optional[shared_getchangetokenresponse.GetChangeTokenResponse] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    
