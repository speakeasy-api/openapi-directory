import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobalbumart as shared_jobalbumart
from ..shared import captions as shared_captions
from ..shared import encryption as shared_encryption
from ..shared import jobwatermark as shared_jobwatermark


@dataclass_json
@dataclasses.dataclass
class CreateJobOutput:
    r"""CreateJobOutput
    The <code>CreateJobOutput</code> structure.
    """
    
    album_art: Optional[shared_jobalbumart.JobAlbumArt] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumArt') }})
    captions: Optional[shared_captions.Captions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Captions') }})
    composition: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Composition') }})
    encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    preset_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PresetId') }})
    rotate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rotate') }})
    segment_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentDuration') }})
    thumbnail_encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailEncryption') }})
    thumbnail_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThumbnailPattern') }})
    watermarks: Optional[list[shared_jobwatermark.JobWatermark]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Watermarks') }})
    
