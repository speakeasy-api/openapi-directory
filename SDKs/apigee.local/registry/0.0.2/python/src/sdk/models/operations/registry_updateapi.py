import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class RegistryUpdateAPIPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryUpdateAPIQueryParams:
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryUpdateAPIRequest:
    path_params: RegistryUpdateAPIPathParams = dataclasses.field()
    query_params: RegistryUpdateAPIQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryUpdateAPIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api: Optional[Any] = dataclasses.field(default=None)
    
