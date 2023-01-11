import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class SearchFlightOffersHeaders:
    x_http_method_override: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HTTP-Method-Override', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchFlightOffersRequest:
    headers: SearchFlightOffersHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.amadeus+json' }})
    

@dataclasses.dataclass
class SearchFlightOffersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_400: Optional[Any] = dataclasses.field(default=None)
    error_500: Optional[Any] = dataclasses.field(default=None)
    success: Optional[Any] = dataclasses.field(default=None)
    
