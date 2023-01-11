import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchBostonCrimeQueryParams:
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
    search_db_boston_crime_day_of_week: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.day_of_week', 'style': 'form', 'explode': True }})
    search_db_boston_crime_district: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.district', 'style': 'form', 'explode': True }})
    search_db_boston_crime_hour: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.hour', 'style': 'form', 'explode': True }})
    search_db_boston_crime_location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.location', 'style': 'form', 'explode': True }})
    search_db_boston_crime_month: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.month', 'style': 'form', 'explode': True }})
    search_db_boston_crime_offense: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.offense', 'style': 'form', 'explode': True }})
    search_db_boston_crime_offense_code_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.offense_code_group', 'style': 'form', 'explode': True }})
    search_db_boston_crime_offense_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.offense_description', 'style': 'form', 'explode': True }})
    search_db_boston_crime_reporting_area: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.reporting_area', 'style': 'form', 'explode': True }})
    search_db_boston_crime_shooting: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.shooting', 'style': 'form', 'explode': True }})
    search_db_boston_crime_street: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.street', 'style': 'form', 'explode': True }})
    search_db_boston_crime_year: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boston_crime.year', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchBostonCrimeRequest:
    query_params: SearchBostonCrimeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchBostonCrimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
