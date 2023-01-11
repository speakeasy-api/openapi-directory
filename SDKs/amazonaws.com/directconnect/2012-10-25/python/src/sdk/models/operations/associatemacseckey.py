import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import associatemacseckeyrequest as shared_associatemacseckeyrequest
from ..shared import associatemacseckeyresponse as shared_associatemacseckeyresponse

class AssociateMacSecKeyXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_ASSOCIATE_MAC_SEC_KEY = "OvertureService.AssociateMacSecKey"


@dataclasses.dataclass
class AssociateMacSecKeyHeaders:
    x_amz_target: AssociateMacSecKeyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AssociateMacSecKeyRequest:
    headers: AssociateMacSecKeyHeaders = dataclasses.field()
    request: shared_associatemacseckeyrequest.AssociateMacSecKeyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssociateMacSecKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associate_mac_sec_key_response: Optional[shared_associatemacseckeyresponse.AssociateMacSecKeyResponse] = dataclasses.field(default=None)
    direct_connect_client_exception: Optional[Any] = dataclasses.field(default=None)
    direct_connect_server_exception: Optional[Any] = dataclasses.field(default=None)
    
