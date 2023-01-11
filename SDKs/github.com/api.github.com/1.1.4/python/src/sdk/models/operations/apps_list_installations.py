import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import installation as shared_installation


@dataclasses.dataclass
class AppsListInstallationsQueryParams:
    outdated: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outdated', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppsListInstallationsRequest:
    query_params: AppsListInstallationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsListInstallationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    installations: Optional[list[shared_installation.Installation]] = dataclasses.field(default=None)
    
