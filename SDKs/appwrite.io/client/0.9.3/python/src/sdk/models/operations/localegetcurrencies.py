import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import currencylist as shared_currencylist


@dataclasses.dataclass
class LocaleGetCurrenciesSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class LocaleGetCurrenciesRequest:
    security: LocaleGetCurrenciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LocaleGetCurrenciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    currency_list: Optional[shared_currencylist.CurrencyList] = dataclasses.field(default=None)
    
