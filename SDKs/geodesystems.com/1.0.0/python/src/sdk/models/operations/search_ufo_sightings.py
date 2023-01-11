import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchUfoSightingsQueryParams:
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
    search_db_ufo_sightings_city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.city', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_comments: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.comments', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.country', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_date_posted: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.date_posted', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_datetime: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.datetime', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_duration_hours_min: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.duration_hours_min', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_duration_seconds: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.duration_seconds', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_latitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.latitude', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_longitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.longitude', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_shape: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.shape', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.state', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchUfoSightingsRequest:
    query_params: SearchUfoSightingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchUfoSightingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
