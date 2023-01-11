import dataclasses
from typing import Any,Optional
from ..shared import twiliomessagerequest as shared_twiliomessagerequest
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class TwilioMessagePostTwilioPostHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TwilioMessagePostTwilioPostRequest:
    headers: TwilioMessagePostTwilioPostHeaders = dataclasses.field()
    request: shared_twiliomessagerequest.TwilioMessageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TwilioMessagePostTwilioPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    twilio_message_post_twilio_post_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
