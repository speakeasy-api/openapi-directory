import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchTypeBlsSeriesQueryParams:
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
    search_type_bls_series_area: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_bls_series.area', 'style': 'form', 'explode': True }})
    search_type_bls_series_industry: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_bls_series.industry', 'style': 'form', 'explode': True }})
    search_type_bls_series_item: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_bls_series.item', 'style': 'form', 'explode': True }})
    search_type_bls_series_measure_data_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_bls_series.measure_data_type', 'style': 'form', 'explode': True }})
    search_type_bls_series_seasonality: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_bls_series.seasonality', 'style': 'form', 'explode': True }})
    search_type_bls_series_sector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_bls_series.sector', 'style': 'form', 'explode': True }})
    search_type_bls_series_survey_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_bls_series.survey_name', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchTypeBlsSeriesRequest:
    query_params: SearchTypeBlsSeriesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchTypeBlsSeriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
