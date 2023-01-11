import dataclasses
from typing import Optional
from enum import Enum
from ..shared import package_type_enum as shared_package_type_enum
from ..shared import package_version as shared_package_version


@dataclasses.dataclass
class PackagesGetPackageVersionForOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    package_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared_package_type_enum.PackageTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    package_version_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'package_version_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PackagesGetPackageVersionForOrganizationRequest:
    path_params: PackagesGetPackageVersionForOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PackagesGetPackageVersionForOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    package_version: Optional[shared_package_version.PackageVersion] = dataclasses.field(default=None)
    
