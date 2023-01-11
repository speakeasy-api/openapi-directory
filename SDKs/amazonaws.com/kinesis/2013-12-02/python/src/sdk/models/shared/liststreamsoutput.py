import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListStreamsOutput:
    r"""ListStreamsOutput
    Represents the output for <code>ListStreams</code>.
    """
    
    has_more_streams: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasMoreStreams') }})
    stream_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamNames') }})
    
