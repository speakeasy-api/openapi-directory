import dataclasses
from typing import Optional
from enum import Enum
from ..shared import package_type_enum as shared_package_type_enum
from ..shared import package as shared_package


@dataclasses.dataclass
class PackagesGetPackageForOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared_package_type_enum.PackageTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackagesGetPackageForOrganizationRequest:
    path_params: PackagesGetPackageForOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PackagesGetPackageForOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    package: Optional[shared_package.Package] = dataclasses.field(default=None)
    
