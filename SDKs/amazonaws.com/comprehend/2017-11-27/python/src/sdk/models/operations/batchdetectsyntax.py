import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchdetectsyntaxrequest as shared_batchdetectsyntaxrequest
from ..shared import batchdetectsyntaxresponse as shared_batchdetectsyntaxresponse

class BatchDetectSyntaxXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_SYNTAX = "Comprehend_20171127.BatchDetectSyntax"


@dataclasses.dataclass
class BatchDetectSyntaxHeaders:
    x_amz_target: BatchDetectSyntaxXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchDetectSyntaxRequest:
    headers: BatchDetectSyntaxHeaders = dataclasses.field()
    request: shared_batchdetectsyntaxrequest.BatchDetectSyntaxRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchDetectSyntaxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_detect_syntax_response: Optional[shared_batchdetectsyntaxresponse.BatchDetectSyntaxResponse] = dataclasses.field(default=None)
    batch_size_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    text_size_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_language_exception: Optional[Any] = dataclasses.field(default=None)
    
