import dataclasses
from typing import Optional
from enum import Enum
from ..shared import package_type_enum as shared_package_type_enum
from ..shared import package_version as shared_package_version


@dataclasses.dataclass
class PackagesGetPackageVersionForUserPathParams:
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared_package_type_enum.PackageTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    package_version_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'package_version_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackagesGetPackageVersionForUserRequest:
    path_params: PackagesGetPackageVersionForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PackagesGetPackageVersionForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    package_version: Optional[shared_package_version.PackageVersion] = dataclasses.field(default=None)
    
