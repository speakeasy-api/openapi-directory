import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codesigning as shared_codesigning
from ..shared import filelocation as shared_filelocation


@dataclass_json
@dataclasses.dataclass
class OtaUpdateFile:
    r"""OtaUpdateFile
    Describes a file to be associated with an OTA update.
    """
    
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    code_signing: Optional[shared_codesigning.CodeSigning] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeSigning') }})
    file_location: Optional[shared_filelocation.FileLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileLocation') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    file_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    file_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileVersion') }})
    
