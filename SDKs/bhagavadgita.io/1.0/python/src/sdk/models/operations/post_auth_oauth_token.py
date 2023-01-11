import dataclasses



@dataclasses.dataclass
class PostAuthOauthTokenRequestBody:
    client_id: str = dataclasses.field(metadata={'form': { 'field_name': 'client_id' }})
    client_secret: str = dataclasses.field(metadata={'form': { 'field_name': 'client_secret' }})
    grant_type: str = dataclasses.field(metadata={'form': { 'field_name': 'grant_type' }})
    scope: str = dataclasses.field(metadata={'form': { 'field_name': 'scope' }})
    

@dataclasses.dataclass
class PostAuthOauthTokenRequest:
    request: PostAuthOauthTokenRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PostAuthOauthTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
