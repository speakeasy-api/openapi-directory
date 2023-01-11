import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SetValidatePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    validate: int = dataclasses.field(metadata={'path_param': { 'field_name': 'validate', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetValidateRequest:
    path_params: SetValidatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_validate_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
