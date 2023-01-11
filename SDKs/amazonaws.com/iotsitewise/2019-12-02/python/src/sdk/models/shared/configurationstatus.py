import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationerrordetails as shared_configurationerrordetails
from ..shared import configurationstate_enum as shared_configurationstate_enum


@dataclass_json
@dataclasses.dataclass
class ConfigurationStatus:
    r"""ConfigurationStatus
    Contains current status information for the configuration.
    """
    
    state: shared_configurationstate_enum.ConfigurationStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    error: Optional[shared_configurationerrordetails.ConfigurationErrorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
