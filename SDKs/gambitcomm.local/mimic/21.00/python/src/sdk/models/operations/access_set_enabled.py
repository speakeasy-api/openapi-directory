import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessSetEnabledPathParams:
    enabled_or_not: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enabledOrNot', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccessSetEnabledRequest:
    path_params: AccessSetEnabledPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccessSetEnabledResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_set_enabled_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
