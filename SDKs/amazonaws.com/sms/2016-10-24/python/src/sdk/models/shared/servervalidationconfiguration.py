import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import server as shared_server
from ..shared import servervalidationstrategy_enum as shared_servervalidationstrategy_enum
from ..shared import userdatavalidationparameters as shared_userdatavalidationparameters


@dataclass_json
@dataclasses.dataclass
class ServerValidationConfiguration:
    r"""ServerValidationConfiguration
    Configuration for validating an instance.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server: Optional[shared_server.Server] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    server_validation_strategy: Optional[shared_servervalidationstrategy_enum.ServerValidationStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverValidationStrategy') }})
    user_data_validation_parameters: Optional[shared_userdatavalidationparameters.UserDataValidationParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDataValidationParameters') }})
    validation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationId') }})
    
