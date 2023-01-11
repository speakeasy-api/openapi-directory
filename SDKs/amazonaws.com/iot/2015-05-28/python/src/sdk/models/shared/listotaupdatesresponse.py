import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import otaupdatesummary as shared_otaupdatesummary


@dataclass_json
@dataclasses.dataclass
class ListOtaUpdatesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    ota_updates: Optional[list[shared_otaupdatesummary.OtaUpdateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdates') }})
    
