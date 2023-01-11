import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAddonLinkersLinkerKeyValuesValueIDPathParams:
    linker_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'linker_key', 'style': 'simple', 'explode': False }})
    value_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'value_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAddonLinkersLinkerKeyValuesValueIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAddonLinkersLinkerKeyValuesValueIDRequest:
    path_params: GetAddonLinkersLinkerKeyValuesValueIDPathParams = dataclasses.field()
    security: GetAddonLinkersLinkerKeyValuesValueIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAddonLinkersLinkerKeyValuesValueIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
