import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchPropertySalesQueryParams:
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
    search_db_property_sales_building_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.building_description', 'style': 'form', 'explode': True }})
    search_db_property_sales_building_design: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.building_design', 'style': 'form', 'explode': True }})
    search_db_property_sales_buyer: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.buyer', 'style': 'form', 'explode': True }})
    search_db_property_sales_city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.city', 'style': 'form', 'explode': True }})
    search_db_property_sales_location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.location', 'style': 'form', 'explode': True }})
    search_db_property_sales_property_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.property_address', 'style': 'form', 'explode': True }})
    search_db_property_sales_sale_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.sale_date', 'style': 'form', 'explode': True }})
    search_db_property_sales_sale_price: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.sale_price', 'style': 'form', 'explode': True }})
    search_db_property_sales_seller: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.seller', 'style': 'form', 'explode': True }})
    search_db_property_sales_subdivision: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.subdivision', 'style': 'form', 'explode': True }})
    search_db_property_sales_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.type', 'style': 'form', 'explode': True }})
    search_db_property_sales_zipcode: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_property_sales.zipcode', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchPropertySalesRequest:
    query_params: SearchPropertySalesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchPropertySalesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
