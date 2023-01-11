import dataclasses
from typing import Any,Optional
from ..shared import discordmessagerequest as shared_discordmessagerequest
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class DiscordPostDiscordPostHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DiscordPostDiscordPostRequest:
    headers: DiscordPostDiscordPostHeaders = dataclasses.field()
    request: shared_discordmessagerequest.DiscordMessageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DiscordPostDiscordPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    discord_post_discord_post_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
