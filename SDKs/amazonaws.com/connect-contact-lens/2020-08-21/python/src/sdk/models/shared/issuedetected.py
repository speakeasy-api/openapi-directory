import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import characteroffsets as shared_characteroffsets


@dataclass_json
@dataclasses.dataclass
class IssueDetected:
    r"""IssueDetected
    Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.
    """
    
    character_offsets: shared_characteroffsets.CharacterOffsets = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CharacterOffsets') }})
    
