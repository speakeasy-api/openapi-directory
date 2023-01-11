import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchDbCoIndicatorsQueryParams:
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
    search_db_db_co_indicators_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_db_co_indicators.description', 'style': 'form', 'explode': True }})
    search_db_db_co_indicators_domain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_db_co_indicators.domain', 'style': 'form', 'explode': True }})
    search_db_db_co_indicators_geo_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_db_co_indicators.geo_name', 'style': 'form', 'explode': True }})
    search_db_db_co_indicators_indicator_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_db_co_indicators.indicatorName', 'style': 'form', 'explode': True }})
    search_db_db_co_indicators_location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_db_co_indicators.location', 'style': 'form', 'explode': True }})
    search_db_db_co_indicators_measure: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_db_co_indicators.measure', 'style': 'form', 'explode': True }})
    search_db_db_co_indicators_subdomain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_db_co_indicators.subdomain', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchDbCoIndicatorsRequest:
    query_params: SearchDbCoIndicatorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchDbCoIndicatorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
