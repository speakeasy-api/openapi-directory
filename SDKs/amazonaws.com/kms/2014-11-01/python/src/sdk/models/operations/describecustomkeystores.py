import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describecustomkeystoresrequest as shared_describecustomkeystoresrequest
from ..shared import describecustomkeystoresresponse as shared_describecustomkeystoresresponse

class DescribeCustomKeyStoresXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_DESCRIBE_CUSTOM_KEY_STORES = "TrentService.DescribeCustomKeyStores"


@dataclasses.dataclass
class DescribeCustomKeyStoresHeaders:
    x_amz_target: DescribeCustomKeyStoresXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeCustomKeyStoresRequest:
    headers: DescribeCustomKeyStoresHeaders = dataclasses.field()
    request: shared_describecustomkeystoresrequest.DescribeCustomKeyStoresRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeCustomKeyStoresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_key_store_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    describe_custom_key_stores_response: Optional[shared_describecustomkeystoresresponse.DescribeCustomKeyStoresResponse] = dataclasses.field(default=None)
    invalid_marker_exception: Optional[Any] = dataclasses.field(default=None)
    kms_internal_exception: Optional[Any] = dataclasses.field(default=None)
    
