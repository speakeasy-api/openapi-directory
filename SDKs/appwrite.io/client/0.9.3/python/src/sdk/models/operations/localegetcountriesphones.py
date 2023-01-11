import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import phonelist as shared_phonelist


@dataclasses.dataclass
class LocaleGetCountriesPhonesSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class LocaleGetCountriesPhonesRequest:
    security: LocaleGetCountriesPhonesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LocaleGetCountriesPhonesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    phone_list: Optional[shared_phonelist.PhoneList] = dataclasses.field(default=None)
    
