import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scoreprivacy_enum as shared_scoreprivacy_enum
from ..shared import scoresource as shared_scoresource

class ScoreCreationDataEncodingEnum(str, Enum):
    BASE64 = "base64"


@dataclass_json
@dataclasses.dataclass
class ScoreCreation:
    r"""ScoreCreation
    A new created score
    """
    
    privacy: shared_scoreprivacy_enum.ScorePrivacyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    collection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_encoding: Optional[ScoreCreationDataEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataEncoding') }})
    filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    google_drive_folder: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDriveFolder') }})
    source: Optional[shared_scoresource.ScoreSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
