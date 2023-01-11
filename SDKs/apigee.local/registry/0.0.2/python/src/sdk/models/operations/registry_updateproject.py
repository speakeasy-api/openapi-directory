import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class RegistryUpdateProjectPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryUpdateProjectQueryParams:
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryUpdateProjectRequest:
    path_params: RegistryUpdateProjectPathParams = dataclasses.field()
    query_params: RegistryUpdateProjectQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryUpdateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project: Optional[Any] = dataclasses.field(default=None)
    
