import dataclasses
from typing import Optional
from enum import Enum
from ..shared import package_type_enum as shared_package_type_enum
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class PackagesDeletePackageForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared_package_type_enum.PackageTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackagesDeletePackageForOrgRequest:
    path_params: PackagesDeletePackageForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PackagesDeletePackageForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
