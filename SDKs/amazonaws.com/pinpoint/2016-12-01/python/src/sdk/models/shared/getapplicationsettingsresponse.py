import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationsettingsresource as shared_applicationsettingsresource


@dataclass_json
@dataclasses.dataclass
class GetApplicationSettingsResponse:
    application_settings_resource: shared_applicationsettingsresource.ApplicationSettingsResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSettingsResource') }})
    
