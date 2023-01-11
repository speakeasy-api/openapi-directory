import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class ActivateMandatePathParams:
    mandate_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivateMandateRequest:
    path_params: ActivateMandatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivateMandateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
