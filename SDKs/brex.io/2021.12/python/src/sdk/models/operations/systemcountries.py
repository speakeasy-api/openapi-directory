import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class SystemCountriesSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class SystemCountriesRequest:
    security: SystemCountriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SystemCountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    system_countries_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    system_countries_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
