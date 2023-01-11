import dataclasses
from typing import Optional
from enum import Enum
from ..shared import package_type_enum as shared_package_type_enum
from ..shared import per_page_enum as shared_per_page_enum
from ..shared import basic_error as shared_basic_error
from ..shared import package_version as shared_package_version


@dataclasses.dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams:
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared_package_type_enum.PackageTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[shared_per_page_enum.PerPageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest:
    path_params: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams = dataclasses.field()
    query_params: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    package_versions: Optional[list[shared_package_version.PackageVersion]] = dataclasses.field(default=None)
    
