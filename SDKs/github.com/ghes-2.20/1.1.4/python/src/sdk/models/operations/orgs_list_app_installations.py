import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import installation_ghes_2 as shared_installation_ghes_2


@dataclasses.dataclass
class OrgsListAppInstallationsPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListAppInstallationsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListAppInstallationsHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OrgsListAppInstallations200ApplicationJSON:
    installations: list[shared_installation_ghes_2.InstallationGhes2] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('installations') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class OrgsListAppInstallationsRequest:
    headers: OrgsListAppInstallationsHeaders = dataclasses.field()
    path_params: OrgsListAppInstallationsPathParams = dataclasses.field()
    query_params: OrgsListAppInstallationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListAppInstallationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    orgs_list_app_installations_200_application_json_object: Optional[OrgsListAppInstallations200ApplicationJSON] = dataclasses.field(default=None)
    
