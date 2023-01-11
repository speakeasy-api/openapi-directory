import dataclasses
from typing import Optional
from enum import Enum

class GetVersionLocationsMarkersFormatIncidentTypeEnum(str, Enum):
    CRASH = "crash"
    HAZARD = "hazard"
    THEFT = "theft"
    UNCONFIRMED = "unconfirmed"
    INFRASTRUCTURE_ISSUE = "infrastructure_issue"
    CHOP_SHOP = "chop_shop"


@dataclasses.dataclass
class GetVersionLocationsMarkersFormatQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    incident_type: Optional[GetVersionLocationsMarkersFormatIncidentTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'incident_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    occurred_after: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurred_after', 'style': 'form', 'explode': True }})
    occurred_before: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurred_before', 'style': 'form', 'explode': True }})
    proximity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proximity', 'style': 'form', 'explode': True }})
    proximity_square: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'proximity_square', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVersionLocationsMarkersFormatRequest:
    query_params: GetVersionLocationsMarkersFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVersionLocationsMarkersFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
