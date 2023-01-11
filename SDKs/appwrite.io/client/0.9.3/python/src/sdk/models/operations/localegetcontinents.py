import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import continentlist as shared_continentlist


@dataclasses.dataclass
class LocaleGetContinentsSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class LocaleGetContinentsRequest:
    security: LocaleGetContinentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LocaleGetContinentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    continent_list: Optional[shared_continentlist.ContinentList] = dataclasses.field(default=None)
    
