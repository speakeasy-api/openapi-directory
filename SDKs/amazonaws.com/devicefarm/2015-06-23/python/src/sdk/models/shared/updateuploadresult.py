import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import upload as shared_upload


@dataclass_json
@dataclasses.dataclass
class UpdateUploadResult:
    upload: Optional[shared_upload.Upload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    
