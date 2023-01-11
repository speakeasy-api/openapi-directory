import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryption as shared_encryption


@dataclass_json
@dataclasses.dataclass
class CaptionSource:
    r"""CaptionSource
    A source file for the input sidecar captions used during the transcoding process.
    """
    
    encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language') }})
    time_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeOffset') }})
    
