import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codeconfigurationvalues as shared_codeconfigurationvalues
from ..shared import configurationsource_enum as shared_configurationsource_enum


@dataclass_json
@dataclasses.dataclass
class CodeConfiguration:
    r"""CodeConfiguration
    Describes the configuration that AWS App Runner uses to build and run an App Runner service from a source code repository.
    """
    
    configuration_source: shared_configurationsource_enum.ConfigurationSourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSource') }})
    code_configuration_values: Optional[shared_codeconfigurationvalues.CodeConfigurationValues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeConfigurationValues') }})
    
