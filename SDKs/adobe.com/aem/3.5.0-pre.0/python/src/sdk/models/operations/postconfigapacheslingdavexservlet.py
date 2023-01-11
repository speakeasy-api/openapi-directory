import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostConfigApacheSlingDavExServletQueryParams:
    alias: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alias', 'style': 'form', 'explode': True }})
    alias_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alias@TypeHint', 'style': 'form', 'explode': True }})
    dav_create_absolute_uri: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dav.create-absolute-uri', 'style': 'form', 'explode': True }})
    dav_create_absolute_uri_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dav.create-absolute-uri@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostConfigApacheSlingDavExServletRequest:
    query_params: PostConfigApacheSlingDavExServletQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostConfigApacheSlingDavExServletResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
