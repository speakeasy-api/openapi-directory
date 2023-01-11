import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPackageFilterPathParams:
    group: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPackageFilterRequest:
    path_params: GetPackageFilterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPackageFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_package_filter_default_application_json_string: Optional[str] = dataclasses.field(default=None)
    
