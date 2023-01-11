import dataclasses
from typing import Optional
from ..shared import installation_ghes_2 as shared_installation_ghes_2


@dataclasses.dataclass
class AppsListInstallationsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppsListInstallationsHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsListInstallationsRequest:
    headers: AppsListInstallationsHeaders = dataclasses.field()
    query_params: AppsListInstallationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsListInstallationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    installation_ghes_2s: Optional[list[shared_installation_ghes_2.InstallationGhes2]] = dataclasses.field(default=None)
    
