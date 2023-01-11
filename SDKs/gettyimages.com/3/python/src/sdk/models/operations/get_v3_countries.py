import dataclasses
from typing import Optional
from ..shared import countrieslist as shared_countrieslist


@dataclasses.dataclass
class GetV3CountriesHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3CountriesRequest:
    headers: GetV3CountriesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetV3CountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    countries_list: Optional[shared_countrieslist.CountriesList] = dataclasses.field(default=None)
    
