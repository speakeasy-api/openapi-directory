import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appvalidationconfiguration as shared_appvalidationconfiguration
from ..shared import servergroupvalidationconfiguration as shared_servergroupvalidationconfiguration


@dataclass_json
@dataclasses.dataclass
class GetAppValidationConfigurationResponse:
    app_validation_configurations: Optional[list[shared_appvalidationconfiguration.AppValidationConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appValidationConfigurations') }})
    server_group_validation_configurations: Optional[list[shared_servergroupvalidationconfiguration.ServerGroupValidationConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupValidationConfigurations') }})
    
