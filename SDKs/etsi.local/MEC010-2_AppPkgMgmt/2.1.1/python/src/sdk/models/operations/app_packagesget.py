import dataclasses
from typing import Optional
from ..shared import apppkginfo as shared_apppkginfo
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPackagesGetQueryParams:
    all_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all_fields', 'style': 'form', 'explode': True }})
    exclude_default: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_default', 'style': 'form', 'explode': True }})
    exclude_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_fields', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppPackagesGetRequest:
    query_params: AppPackagesGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppPackagesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_pkg_infos: Optional[list[shared_apppkginfo.AppPkgInfo]] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
