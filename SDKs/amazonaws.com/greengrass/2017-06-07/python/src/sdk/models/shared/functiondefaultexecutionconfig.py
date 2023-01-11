import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functionisolationmode_enum as shared_functionisolationmode_enum
from ..shared import functionrunasconfig as shared_functionrunasconfig


@dataclass_json
@dataclasses.dataclass
class FunctionDefaultExecutionConfig:
    r"""FunctionDefaultExecutionConfig
    Configuration information that specifies how a Lambda function runs. 
    """
    
    isolation_mode: Optional[shared_functionisolationmode_enum.FunctionIsolationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsolationMode') }})
    run_as: Optional[shared_functionrunasconfig.FunctionRunAsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunAs') }})
    
