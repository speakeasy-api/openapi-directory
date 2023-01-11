import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputfilelocation as shared_inputfilelocation
from ..shared import overwriteexisting_enum as shared_overwriteexisting_enum


@dataclass_json
@dataclasses.dataclass
class CopyStepDetails:
    r"""CopyStepDetails
    Each step type has its own <code>StepDetails</code> structure.
    """
    
    destination_file_location: Optional[shared_inputfilelocation.InputFileLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationFileLocation') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    overwrite_existing: Optional[shared_overwriteexisting_enum.OverwriteExistingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverwriteExisting') }})
    
