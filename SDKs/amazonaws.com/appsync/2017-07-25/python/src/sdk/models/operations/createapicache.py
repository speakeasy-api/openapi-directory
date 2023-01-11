import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createapicacheresponse as shared_createapicacheresponse


@dataclasses.dataclass
class CreateAPICachePathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAPICacheHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateAPICacheRequestBodyAPICachingBehaviorEnum(str, Enum):
    FULL_REQUEST_CACHING = "FULL_REQUEST_CACHING"
    PER_RESOLVER_CACHING = "PER_RESOLVER_CACHING"

class CreateAPICacheRequestBodyTypeEnum(str, Enum):
    T2_SMALL = "T2_SMALL"
    T2_MEDIUM = "T2_MEDIUM"
    R4_LARGE = "R4_LARGE"
    R4_XLARGE = "R4_XLARGE"
    R4_2_XLARGE = "R4_2XLARGE"
    R4_4_XLARGE = "R4_4XLARGE"
    R4_8_XLARGE = "R4_8XLARGE"
    SMALL = "SMALL"
    MEDIUM = "MEDIUM"
    LARGE = "LARGE"
    XLARGE = "XLARGE"
    LARGE_2_X = "LARGE_2X"
    LARGE_4_X = "LARGE_4X"
    LARGE_8_X = "LARGE_8X"
    LARGE_12_X = "LARGE_12X"


@dataclass_json
@dataclasses.dataclass
class CreateAPICacheRequestBody:
    api_caching_behavior: CreateAPICacheRequestBodyAPICachingBehaviorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiCachingBehavior') }})
    ttl: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    type: CreateAPICacheRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    at_rest_encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('atRestEncryptionEnabled') }})
    transit_encryption_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryptionEnabled') }})
    

@dataclasses.dataclass
class CreateAPICacheRequest:
    headers: CreateAPICacheHeaders = dataclasses.field()
    path_params: CreateAPICachePathParams = dataclasses.field()
    request: CreateAPICacheRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAPICacheResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    create_api_cache_response: Optional[shared_createapicacheresponse.CreateAPICacheResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
