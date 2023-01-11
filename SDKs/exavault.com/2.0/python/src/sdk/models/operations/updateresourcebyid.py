import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceresponse as shared_resourceresponse


@dataclasses.dataclass
class UpdateResourceByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateResourceByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateResourceByIDUpdateResourceByIDRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateResourceByIDRequest:
    headers: UpdateResourceByIDHeaders = dataclasses.field()
    path_params: UpdateResourceByIDPathParams = dataclasses.field()
    request: Optional[UpdateResourceByIDUpdateResourceByIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateResourceByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_response: Optional[shared_resourceresponse.ResourceResponse] = dataclasses.field(default=None)
    
