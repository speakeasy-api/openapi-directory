import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import otaupdateinfo as shared_otaupdateinfo


@dataclass_json
@dataclasses.dataclass
class GetOtaUpdateResponse:
    ota_update_info: Optional[shared_otaupdateinfo.OtaUpdateInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateInfo') }})
    
