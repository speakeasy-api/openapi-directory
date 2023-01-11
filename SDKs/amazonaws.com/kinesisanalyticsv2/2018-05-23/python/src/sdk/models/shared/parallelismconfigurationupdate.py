import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationtype_enum as shared_configurationtype_enum


@dataclass_json
@dataclasses.dataclass
class ParallelismConfigurationUpdate:
    r"""ParallelismConfigurationUpdate
    Describes updates to parameters for how an application executes multiple tasks simultaneously.
    """
    
    auto_scaling_enabled_update: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingEnabledUpdate') }})
    configuration_type_update: Optional[shared_configurationtype_enum.ConfigurationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationTypeUpdate') }})
    parallelism_per_kpu_update: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismPerKPUUpdate') }})
    parallelism_update: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelismUpdate') }})
    
