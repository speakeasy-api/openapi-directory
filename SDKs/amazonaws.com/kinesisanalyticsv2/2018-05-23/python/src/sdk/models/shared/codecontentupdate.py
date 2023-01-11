import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3contentlocationupdate as shared_s3contentlocationupdate


@dataclass_json
@dataclasses.dataclass
class CodeContentUpdate:
    r"""CodeContentUpdate
    Describes an update to the code of an application. Not supported for Apache Zeppelin.
    """
    
    s3_content_location_update: Optional[shared_s3contentlocationupdate.S3ContentLocationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocationUpdate') }})
    text_content_update: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextContentUpdate') }})
    zip_file_content_update: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZipFileContentUpdate') }})
    
