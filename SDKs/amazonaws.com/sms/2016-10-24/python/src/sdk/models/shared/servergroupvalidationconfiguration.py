import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servervalidationconfiguration as shared_servervalidationconfiguration


@dataclass_json
@dataclasses.dataclass
class ServerGroupValidationConfiguration:
    r"""ServerGroupValidationConfiguration
    Configuration for validating an instance.
    """
    
    server_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupId') }})
    server_validation_configurations: Optional[list[shared_servervalidationconfiguration.ServerValidationConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationConfigurations') }})
    
