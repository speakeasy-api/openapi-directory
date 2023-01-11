import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetCheckForUpdateQueryParams:
    is_testflight: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_testflight', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCheckForUpdateRequest:
    query_params: GetCheckForUpdateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCheckForUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
