import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import starttexttranslationjobrequest as shared_starttexttranslationjobrequest
from ..shared import starttexttranslationjobresponse as shared_starttexttranslationjobresponse

class StartTextTranslationJobXAmzTargetEnum(str, Enum):
    AWS_SHINE_FRONTEND_SERVICE_20170701_START_TEXT_TRANSLATION_JOB = "AWSShineFrontendService_20170701.StartTextTranslationJob"


@dataclasses.dataclass
class StartTextTranslationJobHeaders:
    x_amz_target: StartTextTranslationJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartTextTranslationJobRequest:
    headers: StartTextTranslationJobHeaders = dataclasses.field()
    request: shared_starttexttranslationjobrequest.StartTextTranslationJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartTextTranslationJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    start_text_translation_job_response: Optional[shared_starttexttranslationjobresponse.StartTextTranslationJobResponse] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_language_pair_exception: Optional[Any] = dataclasses.field(default=None)
    
