import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingsourcedetail as shared_findingsourcedetail
from ..shared import findingsourcetype_enum as shared_findingsourcetype_enum


@dataclass_json
@dataclasses.dataclass
class FindingSource:
    r"""FindingSource
    The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
    """
    
    type: shared_findingsourcetype_enum.FindingSourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    detail: Optional[shared_findingsourcedetail.FindingSourceDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    
