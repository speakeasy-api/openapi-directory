import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describedimensionkeysrequest as shared_describedimensionkeysrequest
from ..shared import describedimensionkeysresponse as shared_describedimensionkeysresponse

class DescribeDimensionKeysXAmzTargetEnum(str, Enum):
    PERFORMANCE_INSIGHTSV20180227_DESCRIBE_DIMENSION_KEYS = "PerformanceInsightsv20180227.DescribeDimensionKeys"


@dataclasses.dataclass
class DescribeDimensionKeysHeaders:
    x_amz_target: DescribeDimensionKeysXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeDimensionKeysRequest:
    headers: DescribeDimensionKeysHeaders = dataclasses.field()
    request: shared_describedimensionkeysrequest.DescribeDimensionKeysRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeDimensionKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_dimension_keys_response: Optional[shared_describedimensionkeysresponse.DescribeDimensionKeysResponse] = dataclasses.field(default=None)
    internal_service_error: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    
