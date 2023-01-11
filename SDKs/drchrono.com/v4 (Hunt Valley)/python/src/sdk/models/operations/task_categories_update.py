import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TaskCategoriesUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaskCategoriesUpdateQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskCategoriesUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskCategoriesUpdateRequest:
    path_params: TaskCategoriesUpdatePathParams = dataclasses.field()
    query_params: TaskCategoriesUpdateQueryParams = dataclasses.field()
    security: TaskCategoriesUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskCategoriesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
