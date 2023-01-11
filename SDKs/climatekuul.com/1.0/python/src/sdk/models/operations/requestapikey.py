import dataclasses
from typing import Optional


REQUEST_API_KEY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclasses.dataclass
class RequestAPIKeyRequestBody:
    api_key_l1: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = dataclasses.field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    email: str = dataclasses.field(metadata={'form': { 'field_name': 'email' }})
    password: int = dataclasses.field(metadata={'form': { 'field_name': 'password' }})
    user_first_name: str = dataclasses.field(metadata={'form': { 'field_name': 'userFirstName' }})
    user_last_name: str = dataclasses.field(metadata={'form': { 'field_name': 'userLastName' }})
    

@dataclasses.dataclass
class RequestAPIKeyRequest:
    request: Optional[RequestAPIKeyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RequestAPIKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
