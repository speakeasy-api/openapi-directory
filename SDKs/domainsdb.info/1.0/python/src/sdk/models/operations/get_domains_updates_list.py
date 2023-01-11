import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import update_model as shared_update_model


@dataclasses.dataclass
class GetDomainsUpdatesListQueryParams:
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDomainsUpdatesListRequest:
    query_params: GetDomainsUpdatesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDomainsUpdatesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_model: Optional[shared_update_model.UpdateModel] = dataclasses.field(default=None)
    
