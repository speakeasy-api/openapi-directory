import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucket as shared_bucket
from ..shared import operation as shared_operation


@dataclass_json
@dataclasses.dataclass
class UpdateBucketResult:
    bucket: Optional[shared_bucket.Bucket] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    operations: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
