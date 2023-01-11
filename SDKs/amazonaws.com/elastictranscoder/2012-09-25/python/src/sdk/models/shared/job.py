import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobinput as shared_jobinput
from ..shared import joboutput as shared_joboutput
from ..shared import playlist as shared_playlist
from ..shared import timing as shared_timing


@dataclass_json
@dataclasses.dataclass
class Job:
    r"""Job
    A section of the response body that provides information about the job that is created.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    input: Optional[shared_jobinput.JobInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    inputs: Optional[list[shared_jobinput.JobInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inputs') }})
    output: Optional[shared_joboutput.JobOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    output_key_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKeyPrefix') }})
    outputs: Optional[list[shared_joboutput.JobOutput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    pipeline_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineId') }})
    playlists: Optional[list[shared_playlist.Playlist]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Playlists') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timing: Optional[shared_timing.Timing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timing') }})
    user_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMetadata') }})
    
