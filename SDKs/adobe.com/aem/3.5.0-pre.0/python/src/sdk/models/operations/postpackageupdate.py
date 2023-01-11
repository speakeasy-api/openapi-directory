import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PostPackageUpdateQueryParams:
    group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'groupName', 'style': 'form', 'explode': True }})
    package_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'packageName', 'style': 'form', 'explode': True }})
    path: str = dataclasses.field(metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    charset_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '_charset_', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostPackageUpdateRequest:
    query_params: PostPackageUpdateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostPackageUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_package_update_default_application_json_string: Optional[str] = dataclasses.field(default=None)
    
