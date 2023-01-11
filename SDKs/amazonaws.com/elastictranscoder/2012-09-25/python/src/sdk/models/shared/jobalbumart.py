import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artwork as shared_artwork


@dataclass_json
@dataclasses.dataclass
class JobAlbumArt:
    r"""JobAlbumArt
    The .jpg or .png file associated with an audio file.
    """
    
    artwork: Optional[list[shared_artwork.Artwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Artwork') }})
    merge_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergePolicy') }})
    
