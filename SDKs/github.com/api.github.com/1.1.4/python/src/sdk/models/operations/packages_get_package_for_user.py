import dataclasses
from typing import Optional
from enum import Enum
from ..shared import package_type_enum as shared_package_type_enum
from ..shared import package as shared_package


@dataclasses.dataclass
class PackagesGetPackageForUserPathParams:
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared_package_type_enum.PackageTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackagesGetPackageForUserRequest:
    path_params: PackagesGetPackageForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PackagesGetPackageForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    package: Optional[shared_package.Package] = dataclasses.field(default=None)
    
