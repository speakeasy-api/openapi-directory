import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BucketCountBySharedAccessType:
    r"""BucketCountBySharedAccessType
    Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts.
    """
    
    external: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external') }})
    internal: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal') }})
    not_shared: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notShared') }})
    unknown: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknown') }})
    
