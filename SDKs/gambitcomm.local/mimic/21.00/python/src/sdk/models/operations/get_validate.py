import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetValidatePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetValidateRequest:
    path_params: GetValidatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_validate_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
