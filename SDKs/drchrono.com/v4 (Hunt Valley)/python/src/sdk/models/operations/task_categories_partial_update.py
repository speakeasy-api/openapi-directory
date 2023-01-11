import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TaskCategoriesPartialUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaskCategoriesPartialUpdateQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskCategoriesPartialUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskCategoriesPartialUpdateRequest:
    path_params: TaskCategoriesPartialUpdatePathParams = dataclasses.field()
    query_params: TaskCategoriesPartialUpdateQueryParams = dataclasses.field()
    security: TaskCategoriesPartialUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskCategoriesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
