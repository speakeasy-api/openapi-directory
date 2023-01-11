import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updaterole as shared_updaterole
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdateRoleMappingPathParams:
    principal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'principalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRoleMappingRequest:
    path_params: UpdateRoleMappingPathParams = dataclasses.field()
    request: shared_updaterole.UpdateRole = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRoleMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
