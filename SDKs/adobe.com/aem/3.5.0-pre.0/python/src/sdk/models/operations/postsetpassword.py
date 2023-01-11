import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostSetPasswordQueryParams:
    old: str = dataclasses.field(metadata={'query_param': { 'field_name': 'old', 'style': 'form', 'explode': True }})
    plain: str = dataclasses.field(metadata={'query_param': { 'field_name': 'plain', 'style': 'form', 'explode': True }})
    verify: str = dataclasses.field(metadata={'query_param': { 'field_name': 'verify', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostSetPasswordRequest:
    query_params: PostSetPasswordQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostSetPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_set_password_default_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
