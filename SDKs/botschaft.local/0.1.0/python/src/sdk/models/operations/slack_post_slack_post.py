import dataclasses
from typing import Any,Optional
from ..shared import slackmessagerequest as shared_slackmessagerequest
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class SlackPostSlackPostHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SlackPostSlackPostRequest:
    headers: SlackPostSlackPostHeaders = dataclasses.field()
    request: shared_slackmessagerequest.SlackMessageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SlackPostSlackPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    slack_post_slack_post_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
