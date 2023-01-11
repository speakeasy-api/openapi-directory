import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3resource as shared_s3resource


@dataclass_json
@dataclasses.dataclass
class FailedS3Resource:
    r"""FailedS3Resource
    Includes details about the failed S3 resources.
    """
    
    error_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    failed_item: Optional[shared_s3resource.S3Resource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItem') }})
    
