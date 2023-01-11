import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3keyoutput as shared_s3keyoutput


@dataclass_json
@dataclasses.dataclass
class DataSource:
    r"""DataSource
    Information about a data source.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    s3_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_keys: Optional[list[shared_s3keyoutput.S3KeyOutput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Keys') }})
    
