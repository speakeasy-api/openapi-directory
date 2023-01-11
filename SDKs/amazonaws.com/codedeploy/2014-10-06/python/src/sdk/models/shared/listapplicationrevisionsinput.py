import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import liststatefilteraction_enum as shared_liststatefilteraction_enum
from ..shared import applicationrevisionsortby_enum as shared_applicationrevisionsortby_enum
from ..shared import sortorder_enum as shared_sortorder_enum


@dataclass_json
@dataclasses.dataclass
class ListApplicationRevisionsInput:
    r"""ListApplicationRevisionsInput
     Represents the input of a <code>ListApplicationRevisions</code> operation. 
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    deployed: Optional[shared_liststatefilteraction_enum.ListStateFilterActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployed') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    s3_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    s3_key_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3KeyPrefix') }})
    sort_by: Optional[shared_applicationrevisionsortby_enum.ApplicationRevisionSortByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    sort_order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
