import dataclasses
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class DiscordGetDiscordGetQueryParams:
    channel: str = dataclasses.field(metadata={'query_param': { 'field_name': 'channel', 'style': 'form', 'explode': True }})
    base64_message: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'base64_message', 'style': 'form', 'explode': True }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DiscordGetDiscordGetHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DiscordGetDiscordGetRequest:
    headers: DiscordGetDiscordGetHeaders = dataclasses.field()
    query_params: DiscordGetDiscordGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DiscordGetDiscordGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    discord_get_discord_get_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
