import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textlogdestination as shared_textlogdestination


@dataclass_json
@dataclasses.dataclass
class TextLogSetting:
    r"""TextLogSetting
    Defines settings to enable text conversation logs.
    """
    
    destination: shared_textlogdestination.TextLogDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
