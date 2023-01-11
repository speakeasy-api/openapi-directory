import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchConstructionPermitsQueryParams:
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
    search_db_construction_permits_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.address', 'style': 'form', 'explode': True }})
    search_db_construction_permits_affordable_hsg_unit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.affordable_hsg_unit', 'style': 'form', 'explode': True }})
    search_db_construction_permits_applied: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.applied', 'style': 'form', 'explode': True }})
    search_db_construction_permits_approved: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.approved', 'style': 'form', 'explode': True }})
    search_db_construction_permits_building_uses_and_work_scopes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.building_uses_and_work_scopes', 'style': 'form', 'explode': True }})
    search_db_construction_permits_case_status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.case_status', 'style': 'form', 'explode': True }})
    search_db_construction_permits_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.category', 'style': 'form', 'explode': True }})
    search_db_construction_permits_co_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.co_date', 'style': 'form', 'explode': True }})
    search_db_construction_permits_completion_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.completion_date', 'style': 'form', 'explode': True }})
    search_db_construction_permits_contractor_company: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.contractor_company', 'style': 'form', 'explode': True }})
    search_db_construction_permits_contractor_first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.contractor_first_name', 'style': 'form', 'explode': True }})
    search_db_construction_permits_contractor_last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.contractor_last_name', 'style': 'form', 'explode': True }})
    search_db_construction_permits_existing_res_unit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.existing_res_unit', 'style': 'form', 'explode': True }})
    search_db_construction_permits_issued: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.issued', 'style': 'form', 'explode': True }})
    search_db_construction_permits_narrative_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.narrative_description', 'style': 'form', 'explode': True }})
    search_db_construction_permits_new_res_unit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.new_res_unit', 'style': 'form', 'explode': True }})
    search_db_construction_permits_new_sf: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.new_sf', 'style': 'form', 'explode': True }})
    search_db_construction_permits_owner1_company: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.owner1_company', 'style': 'form', 'explode': True }})
    search_db_construction_permits_owner1_first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.owner1_first_name', 'style': 'form', 'explode': True }})
    search_db_construction_permits_owner1_last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.owner1_last_name', 'style': 'form', 'explode': True }})
    search_db_construction_permits_owner2_company: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.owner2_company', 'style': 'form', 'explode': True }})
    search_db_construction_permits_owner2_first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.owner2_first_name', 'style': 'form', 'explode': True }})
    search_db_construction_permits_owner2_last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.owner2_last_name', 'style': 'form', 'explode': True }})
    search_db_construction_permits_permit_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.permit_types', 'style': 'form', 'explode': True }})
    search_db_construction_permits_primary_company: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.primary_company', 'style': 'form', 'explode': True }})
    search_db_construction_permits_primary_first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.primary_first_name', 'style': 'form', 'explode': True }})
    search_db_construction_permits_primary_last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.primary_last_name', 'style': 'form', 'explode': True }})
    search_db_construction_permits_remodel_sf: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.remodel_sf', 'style': 'form', 'explode': True }})
    search_db_construction_permits_total_project_value: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.total_project_value', 'style': 'form', 'explode': True }})
    search_db_construction_permits_total_subpermit_value: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_construction_permits.total_subpermit_value', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchConstructionPermitsRequest:
    query_params: SearchConstructionPermitsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchConstructionPermitsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
