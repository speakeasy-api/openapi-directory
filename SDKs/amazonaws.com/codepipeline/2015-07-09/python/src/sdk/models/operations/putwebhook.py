import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putwebhookinput as shared_putwebhookinput
from ..shared import putwebhookoutput as shared_putwebhookoutput

class PutWebhookXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_WEBHOOK = "CodePipeline_20150709.PutWebhook"


@dataclasses.dataclass
class PutWebhookHeaders:
    x_amz_target: PutWebhookXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWebhookRequest:
    headers: PutWebhookHeaders = dataclasses.field()
    request: shared_putwebhookinput.PutWebhookInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_tags_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_webhook_authentication_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_webhook_filter_pattern_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    pipeline_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    put_webhook_output: Optional[shared_putwebhookoutput.PutWebhookOutput] = dataclasses.field(default=None)
    too_many_tags_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
