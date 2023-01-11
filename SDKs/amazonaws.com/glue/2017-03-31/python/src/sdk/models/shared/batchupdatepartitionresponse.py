import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchupdatepartitionfailureentry as shared_batchupdatepartitionfailureentry


@dataclass_json
@dataclasses.dataclass
class BatchUpdatePartitionResponse:
    errors: Optional[list[shared_batchupdatepartitionfailureentry.BatchUpdatePartitionFailureEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
