import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostAuthorizablesQueryParams:
    authorizable_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'authorizableId', 'style': 'form', 'explode': True }})
    intermediate_path: str = dataclasses.field(metadata={'query_param': { 'field_name': 'intermediatePath', 'style': 'form', 'explode': True }})
    create_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createGroup', 'style': 'form', 'explode': True }})
    create_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createUser', 'style': 'form', 'explode': True }})
    profile_given_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'profile/givenName', 'style': 'form', 'explode': True }})
    rep_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rep:password', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAuthorizablesRequest:
    query_params: PostAuthorizablesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAuthorizablesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_authorizables_default_text_html_string: Optional[str] = dataclasses.field(default=None)
    
