import dataclasses
from typing import Any,Optional
from ..shared import snsmessagerequest as shared_snsmessagerequest
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class SnsPostSnsPostHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SnsPostSnsPostRequest:
    headers: SnsPostSnsPostHeaders = dataclasses.field()
    request: shared_snsmessagerequest.SnsMessageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SnsPostSnsPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    sns_post_sns_post_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
