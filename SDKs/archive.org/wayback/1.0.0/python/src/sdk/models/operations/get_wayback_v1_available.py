import dataclasses
from typing import Optional
from enum import Enum
from ..shared import closest_enum as shared_closest_enum
from ..shared import availabilityresults as shared_availabilityresults
from ..shared import error as shared_error


@dataclasses.dataclass
class GetWaybackV1AvailableQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    closest: Optional[shared_closest_enum.ClosestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'closest', 'style': 'form', 'explode': True }})
    status_code: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status_code', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    timeout: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWaybackV1AvailableRequest:
    query_params: GetWaybackV1AvailableQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWaybackV1AvailableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    availability_results: Optional[shared_availabilityresults.AvailabilityResults] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
