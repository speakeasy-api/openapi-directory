import dataclasses
from typing import Optional
from enum import Enum
from ..shared import package_type_enum as shared_package_type_enum
from ..shared import basic_error as shared_basic_error
from ..shared import package_version as shared_package_version


@dataclasses.dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams:
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared_package_type_enum.PackageTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserRequest:
    path_params: PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    package_versions: Optional[list[shared_package_version.PackageVersion]] = dataclasses.field(default=None)
    
