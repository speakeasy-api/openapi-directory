import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import crmresponse as shared_crmresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class CrmCheckPathParams:
    vin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CrmCheckQueryParams:
    sale_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'sale_date', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CrmCheckRequest:
    path_params: CrmCheckPathParams = dataclasses.field()
    query_params: CrmCheckQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CrmCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    crm_response: Optional[shared_crmresponse.CrmResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
