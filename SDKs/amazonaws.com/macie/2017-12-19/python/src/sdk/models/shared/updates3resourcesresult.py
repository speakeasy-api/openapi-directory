import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import faileds3resource as shared_faileds3resource


@dataclass_json
@dataclasses.dataclass
class UpdateS3ResourcesResult:
    failed_s3_resources: Optional[list[shared_faileds3resource.FailedS3Resource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedS3Resources') }})
    
