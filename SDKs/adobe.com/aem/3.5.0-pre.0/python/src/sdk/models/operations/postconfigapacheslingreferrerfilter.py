import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostConfigApacheSlingReferrerFilterQueryParams:
    allow_empty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allow.empty', 'style': 'form', 'explode': True }})
    allow_empty_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allow.empty@TypeHint', 'style': 'form', 'explode': True }})
    allow_hosts: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allow.hosts', 'style': 'form', 'explode': True }})
    allow_hosts_regexp: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allow.hosts.regexp', 'style': 'form', 'explode': True }})
    allow_hosts_regexp_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allow.hosts.regexp@TypeHint', 'style': 'form', 'explode': True }})
    allow_hosts_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allow.hosts@TypeHint', 'style': 'form', 'explode': True }})
    filter_methods: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter.methods', 'style': 'form', 'explode': True }})
    filter_methods_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter.methods@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostConfigApacheSlingReferrerFilterRequest:
    query_params: PostConfigApacheSlingReferrerFilterQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostConfigApacheSlingReferrerFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
