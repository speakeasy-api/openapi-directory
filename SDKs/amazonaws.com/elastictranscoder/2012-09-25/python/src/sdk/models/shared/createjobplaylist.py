import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hlscontentprotection as shared_hlscontentprotection
from ..shared import playreadydrm as shared_playreadydrm


@dataclass_json
@dataclasses.dataclass
class CreateJobPlaylist:
    r"""CreateJobPlaylist
    Information about the master playlist.
    """
    
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    hls_content_protection: Optional[shared_hlscontentprotection.HlsContentProtection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HlsContentProtection') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKeys') }})
    play_ready_drm: Optional[shared_playreadydrm.PlayReadyDrm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayReadyDrm') }})
    
