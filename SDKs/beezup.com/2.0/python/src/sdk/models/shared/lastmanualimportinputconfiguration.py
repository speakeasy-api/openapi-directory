import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputconfiguration as shared_inputconfiguration


@dataclass_json
@dataclasses.dataclass
class LastManualImportInputConfiguration:
    r"""LastManualImportInputConfiguration
    Last manual import input configuration
    """
    
    input: shared_inputconfiguration.InputConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    
