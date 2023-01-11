import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputfileconfiguration as shared_inputfileconfiguration


@dataclass_json
@dataclasses.dataclass
class InputConfiguration:
    r"""InputConfiguration
    Describe the input configuration
    """
    
    files: list[shared_inputfileconfiguration.InputFileConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    transform_file_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformFileUrl') }})
    
