import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdacontainerparams as shared_lambdacontainerparams
from ..shared import lambdaisolationmode_enum as shared_lambdaisolationmode_enum


@dataclass_json
@dataclasses.dataclass
class LambdaLinuxProcessParams:
    r"""LambdaLinuxProcessParams
    Contains parameters for a Linux process that contains an Lambda function.
    """
    
    container_params: Optional[shared_lambdacontainerparams.LambdaContainerParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerParams') }})
    isolation_mode: Optional[shared_lambdaisolationmode_enum.LambdaIsolationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isolationMode') }})
    
