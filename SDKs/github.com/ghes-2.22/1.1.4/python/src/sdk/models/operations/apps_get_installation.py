import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import installation_ghes_2 as shared_installation_ghes_2


@dataclasses.dataclass
class AppsGetInstallationPathParams:
    installation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppsGetInstallation415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class AppsGetInstallationRequest:
    path_params: AppsGetInstallationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetInstallationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    apps_get_installation_415_application_json_object: Optional[AppsGetInstallation415ApplicationJSON] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    installation_ghes_2: Optional[shared_installation_ghes_2.InstallationGhes2] = dataclasses.field(default=None)
    
