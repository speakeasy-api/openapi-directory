import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchUsPlacesQueryParams:
    changedate_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_db_us_places_county_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.county_name', 'style': 'form', 'explode': True }})
    search_db_us_places_elev_in_ft: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.elev_in_ft', 'style': 'form', 'explode': True }})
    search_db_us_places_feature_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.feature_class', 'style': 'form', 'explode': True }})
    search_db_us_places_feature_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.feature_name', 'style': 'form', 'explode': True }})
    search_db_us_places_location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.location', 'style': 'form', 'explode': True }})
    search_db_us_places_state_alpha: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.state_alpha', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchUsPlacesRequest:
    query_params: SearchUsPlacesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchUsPlacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
