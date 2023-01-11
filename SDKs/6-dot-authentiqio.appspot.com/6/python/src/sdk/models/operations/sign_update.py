import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SignUpdatePathParams:
    job: str = dataclasses.field(metadata={'path_param': { 'field_name': 'job', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SignUpdateRequest:
    path_params: SignUpdatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SignUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
