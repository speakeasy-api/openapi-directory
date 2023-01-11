import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchupdatedetectorerrorentry as shared_batchupdatedetectorerrorentry


@dataclass_json
@dataclasses.dataclass
class BatchUpdateDetectorResponse:
    batch_update_detector_error_entries: Optional[list[shared_batchupdatedetectorerrorentry.BatchUpdateDetectorErrorEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchUpdateDetectorErrorEntries') }})
    
