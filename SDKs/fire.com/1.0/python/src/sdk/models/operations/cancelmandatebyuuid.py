import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class CancelMandateByUUIDPathParams:
    mandate_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelMandateByUUIDRequest:
    path_params: CancelMandateByUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CancelMandateByUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
