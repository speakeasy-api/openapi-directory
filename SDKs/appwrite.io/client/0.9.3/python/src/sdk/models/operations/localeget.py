import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import locale as shared_locale


@dataclasses.dataclass
class LocaleGetSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class LocaleGetRequest:
    security: LocaleGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LocaleGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    locale: Optional[shared_locale.Locale] = dataclasses.field(default=None)
    
