import dataclasses
from typing import Optional


@dataclasses.dataclass
class ExtensionConfigurationHeaders:
    accept_language: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    cache_control: str = dataclasses.field(metadata={'header': { 'field_name': 'Cache-Control', 'style': 'simple', 'explode': False }})
    request_timeout: float = dataclasses.field(metadata={'header': { 'field_name': 'Request-Timeout', 'style': 'simple', 'explode': False }})
    user_agent: str = dataclasses.field(metadata={'header': { 'field_name': 'User-Agent', 'style': 'simple', 'explode': False }})
    x_applecloudextension_session_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-applecloudextension-session-id', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    x_applecloudextension_retry_count: Optional[float] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-applecloudextension-retry-count', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtensionConfigurationRequest:
    headers: ExtensionConfigurationHeaders = dataclasses.field()
    

@dataclasses.dataclass
class ExtensionConfigurationResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
