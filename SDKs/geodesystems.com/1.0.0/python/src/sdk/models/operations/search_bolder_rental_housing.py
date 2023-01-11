import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchBolderRentalHousingQueryParams:
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
    search_db_bolder_rental_housing_bldgtype: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.bldgtype', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_company: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.company', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_complexnm: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.complexnm', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_dwellunits: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.dwellunits', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_engcompl: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.engcompl', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_licenseexp: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.licenseexp', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_licensenum: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.licensenum', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.location', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.name', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_neighbrhd: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.neighbrhd', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_person_1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.person_1', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_person_2: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.person_2', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_persontype: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.persontype', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_ppl1_coname: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.ppl1_coname', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_ppl1_role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.ppl1_role', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_ppl2_coname: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.ppl2_coname', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_ppl2_role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.ppl2_role', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_propaddr1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.propaddr1', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_rentaltype: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.rentaltype', 'style': 'form', 'explode': True }})
    search_db_bolder_rental_housing_roomunits: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_bolder_rental_housing.roomunits', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchBolderRentalHousingRequest:
    query_params: SearchBolderRentalHousingQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchBolderRentalHousingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
