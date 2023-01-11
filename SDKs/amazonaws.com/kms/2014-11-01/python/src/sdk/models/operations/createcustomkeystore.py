import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createcustomkeystorerequest as shared_createcustomkeystorerequest
from ..shared import createcustomkeystoreresponse as shared_createcustomkeystoreresponse

class CreateCustomKeyStoreXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_CREATE_CUSTOM_KEY_STORE = "TrentService.CreateCustomKeyStore"


@dataclasses.dataclass
class CreateCustomKeyStoreHeaders:
    x_amz_target: CreateCustomKeyStoreXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCustomKeyStoreRequest:
    headers: CreateCustomKeyStoreHeaders = dataclasses.field()
    request: shared_createcustomkeystorerequest.CreateCustomKeyStoreRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCustomKeyStoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cloud_hsm_cluster_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_cluster_invalid_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_cluster_not_active_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_cluster_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    create_custom_key_store_response: Optional[shared_createcustomkeystoreresponse.CreateCustomKeyStoreResponse] = dataclasses.field(default=None)
    custom_key_store_name_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    incorrect_trust_anchor_exception: Optional[Any] = dataclasses.field(default=None)
    kms_internal_exception: Optional[Any] = dataclasses.field(default=None)
    
