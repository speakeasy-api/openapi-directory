import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputfilefetchconfiguration as shared_inputfilefetchconfiguration
from ..shared import inputfilereadconfiguration as shared_inputfilereadconfiguration


@dataclass_json
@dataclasses.dataclass
class InputFileConfiguration:
    r"""InputFileConfiguration
    Describe how to get and read a file
    """
    
    fetch: shared_inputfilefetchconfiguration.InputFileFetchConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch') }})
    file_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileNumber') }})
    read: shared_inputfilereadconfiguration.InputFileReadConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    
