import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encodingtype_enum as shared_encodingtype_enum
from ..shared import functionconfigurationenvironment as shared_functionconfigurationenvironment


@dataclass_json
@dataclasses.dataclass
class FunctionConfiguration:
    r"""FunctionConfiguration
    The configuration of the Lambda function.
    """
    
    encoding_type: Optional[shared_encodingtype_enum.EncodingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncodingType') }})
    environment: Optional[shared_functionconfigurationenvironment.FunctionConfigurationEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    exec_args: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecArgs') }})
    executable: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Executable') }})
    memory_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemorySize') }})
    pinned: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pinned') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    
