import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchdetectdominantlanguagerequest as shared_batchdetectdominantlanguagerequest
from ..shared import batchdetectdominantlanguageresponse as shared_batchdetectdominantlanguageresponse

class BatchDetectDominantLanguageXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_DOMINANT_LANGUAGE = "Comprehend_20171127.BatchDetectDominantLanguage"


@dataclasses.dataclass
class BatchDetectDominantLanguageHeaders:
    x_amz_target: BatchDetectDominantLanguageXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchDetectDominantLanguageRequest:
    headers: BatchDetectDominantLanguageHeaders = dataclasses.field()
    request: shared_batchdetectdominantlanguagerequest.BatchDetectDominantLanguageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchDetectDominantLanguageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_detect_dominant_language_response: Optional[shared_batchdetectdominantlanguageresponse.BatchDetectDominantLanguageResponse] = dataclasses.field(default=None)
    batch_size_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    text_size_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
