import dataclasses
from typing import Optional
from ..shared import config as shared_config
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class ConfigConfigGetHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConfigConfigGetRequest:
    headers: ConfigConfigGetHeaders = dataclasses.field()
    

@dataclasses.dataclass
class ConfigConfigGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config: Optional[shared_config.Config] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
