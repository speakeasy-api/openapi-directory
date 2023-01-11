import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostConfigApacheHTTPComponentsProxyConfigurationQueryParams:
    proxy_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.enabled', 'style': 'form', 'explode': True }})
    proxy_enabled_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.enabled@TypeHint', 'style': 'form', 'explode': True }})
    proxy_exceptions: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.exceptions', 'style': 'form', 'explode': True }})
    proxy_exceptions_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.exceptions@TypeHint', 'style': 'form', 'explode': True }})
    proxy_host: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.host', 'style': 'form', 'explode': True }})
    proxy_host_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.host@TypeHint', 'style': 'form', 'explode': True }})
    proxy_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.password', 'style': 'form', 'explode': True }})
    proxy_password_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.password@TypeHint', 'style': 'form', 'explode': True }})
    proxy_port: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.port', 'style': 'form', 'explode': True }})
    proxy_port_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.port@TypeHint', 'style': 'form', 'explode': True }})
    proxy_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.user', 'style': 'form', 'explode': True }})
    proxy_user_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proxy.user@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostConfigApacheHTTPComponentsProxyConfigurationRequest:
    query_params: PostConfigApacheHTTPComponentsProxyConfigurationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostConfigApacheHTTPComponentsProxyConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
