import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import languagelist as shared_languagelist


@dataclasses.dataclass
class LocaleGetLanguagesSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class LocaleGetLanguagesRequest:
    security: LocaleGetLanguagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LocaleGetLanguagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    language_list: Optional[shared_languagelist.LanguageList] = dataclasses.field(default=None)
    
