import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class RegistryUpdateAPISpecPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryUpdateAPISpecQueryParams:
    allow_missing: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allow_missing', 'style': 'form', 'explode': True }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryUpdateAPISpecRequest:
    path_params: RegistryUpdateAPISpecPathParams = dataclasses.field()
    query_params: RegistryUpdateAPISpecQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegistryUpdateAPISpecResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_spec: Optional[Any] = dataclasses.field(default=None)
    
