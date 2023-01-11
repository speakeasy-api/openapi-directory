import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SsmlMessage:
    r"""SsmlMessage
    Defines a Speech Synthesis Markup Language (SSML) prompt.
    """
    
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
