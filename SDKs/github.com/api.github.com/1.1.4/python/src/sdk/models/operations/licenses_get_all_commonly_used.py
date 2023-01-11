import dataclasses
from typing import Optional
from ..shared import license_simple as shared_license_simple


@dataclasses.dataclass
class LicensesGetAllCommonlyUsedQueryParams:
    featured: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featured', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LicensesGetAllCommonlyUsedRequest:
    query_params: LicensesGetAllCommonlyUsedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LicensesGetAllCommonlyUsedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    license_simples: Optional[list[shared_license_simple.LicenseSimple]] = dataclasses.field(default=None)
    
