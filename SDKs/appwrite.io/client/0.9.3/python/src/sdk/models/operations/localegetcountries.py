import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import countrylist as shared_countrylist


@dataclasses.dataclass
class LocaleGetCountriesSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class LocaleGetCountriesRequest:
    security: LocaleGetCountriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LocaleGetCountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    country_list: Optional[shared_countrylist.CountryList] = dataclasses.field(default=None)
    
