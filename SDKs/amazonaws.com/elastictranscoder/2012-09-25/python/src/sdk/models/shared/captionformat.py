import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryption as shared_encryption


@dataclass_json
@dataclasses.dataclass
class CaptionFormat:
    r"""CaptionFormat
    The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.
    """
    
    encryption: Optional[shared_encryption.Encryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pattern') }})
    
