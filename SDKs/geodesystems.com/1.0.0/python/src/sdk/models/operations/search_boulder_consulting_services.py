import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchBoulderConsultingServicesQueryParams:
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
    search_db_boulder_consulting_services_account_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.account_description', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.amount', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_comment: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.comment', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.date', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_department: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.department', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_fund: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.fund', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_object: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.object', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_organization: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.organization', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_project: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.project', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_purchase_order: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.purchase_order', 'style': 'form', 'explode': True }})
    search_db_boulder_consulting_services_vendor_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_consulting_services.vendor_name', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchBoulderConsultingServicesRequest:
    query_params: SearchBoulderConsultingServicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchBoulderConsultingServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
