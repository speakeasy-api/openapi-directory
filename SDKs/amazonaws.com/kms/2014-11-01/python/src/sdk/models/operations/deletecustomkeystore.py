import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deletecustomkeystorerequest as shared_deletecustomkeystorerequest

class DeleteCustomKeyStoreXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_DELETE_CUSTOM_KEY_STORE = "TrentService.DeleteCustomKeyStore"


@dataclasses.dataclass
class DeleteCustomKeyStoreHeaders:
    x_amz_target: DeleteCustomKeyStoreXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCustomKeyStoreRequest:
    headers: DeleteCustomKeyStoreHeaders = dataclasses.field()
    request: shared_deletecustomkeystorerequest.DeleteCustomKeyStoreRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteCustomKeyStoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_key_store_has_cm_ks_exception: Optional[Any] = dataclasses.field(default=None)
    custom_key_store_invalid_state_exception: Optional[Any] = dataclasses.field(default=None)
    custom_key_store_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    delete_custom_key_store_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    kms_internal_exception: Optional[Any] = dataclasses.field(default=None)
    
