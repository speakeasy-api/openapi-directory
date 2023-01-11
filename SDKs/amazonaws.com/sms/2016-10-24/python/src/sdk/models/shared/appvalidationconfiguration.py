import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appvalidationstrategy_enum as shared_appvalidationstrategy_enum
from ..shared import ssmvalidationparameters as shared_ssmvalidationparameters


@dataclass_json
@dataclasses.dataclass
class AppValidationConfiguration:
    r"""AppValidationConfiguration
    Configuration for validating an application.
    """
    
    app_validation_strategy: Optional[shared_appvalidationstrategy_enum.AppValidationStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appValidationStrategy') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssm_validation_parameters: Optional[shared_ssmvalidationparameters.SsmValidationParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmValidationParameters') }})
    validation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationId') }})
    
