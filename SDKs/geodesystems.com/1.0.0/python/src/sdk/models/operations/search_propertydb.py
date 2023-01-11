import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchPropertydbQueryParams:
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
    search_db_propertydb_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.address', 'style': 'form', 'explode': True }})
    search_db_propertydb_building_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.building_type', 'style': 'form', 'explode': True }})
    search_db_propertydb_city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.city', 'style': 'form', 'explode': True }})
    search_db_propertydb_house_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.house_size', 'style': 'form', 'explode': True }})
    search_db_propertydb_location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.location', 'style': 'form', 'explode': True }})
    search_db_propertydb_lot_acres: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.lot_acres', 'style': 'form', 'explode': True }})
    search_db_propertydb_lot_sqft: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.lot_sqft', 'style': 'form', 'explode': True }})
    search_db_propertydb_owner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.owner', 'style': 'form', 'explode': True }})
    search_db_propertydb_price_sqft: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.price_sqft', 'style': 'form', 'explode': True }})
    search_db_propertydb_property_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.property_id', 'style': 'form', 'explode': True }})
    search_db_propertydb_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.state', 'style': 'form', 'explode': True }})
    search_db_propertydb_value: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.value', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchPropertydbRequest:
    query_params: SearchPropertydbQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchPropertydbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
