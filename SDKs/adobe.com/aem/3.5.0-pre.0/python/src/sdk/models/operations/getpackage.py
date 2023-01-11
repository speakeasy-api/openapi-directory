import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPackagePathParams:
    group: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPackageRequest:
    path_params: GetPackagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPackageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_package_default_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
