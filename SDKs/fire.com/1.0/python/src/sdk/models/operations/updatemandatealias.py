import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class UpdateMandateAliasPathParams:
    mandate_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMandateAliasRequest:
    path_params: UpdateMandateAliasPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UpdateMandateAliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
