import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import packagesearchresult as shared_packagesearchresult

class SearchperpackageMatchModeEnum(str, Enum):
    LITERAL = "literal"
    REGEXP = "regexp"


@dataclasses.dataclass
class SearchperpackageQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    match_mode: Optional[SearchperpackageMatchModeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'match_mode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchperpackageSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class SearchperpackageRequest:
    query_params: SearchperpackageQueryParams = dataclasses.field()
    security: SearchperpackageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SearchperpackageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    package_search_results: Optional[list[shared_packagesearchresult.PackageSearchResult]] = dataclasses.field(default=None)
    
