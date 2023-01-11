import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failurecode_enum as shared_failurecode_enum
from ..shared import changestatus_enum as shared_changestatus_enum


@dataclass_json
@dataclasses.dataclass
class ChangeSetSummaryListItem:
    r"""ChangeSetSummaryListItem
    A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.
    """
    
    change_set_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetArn') }})
    change_set_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetId') }})
    change_set_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetName') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime') }})
    entity_id_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityIdList') }})
    failure_code: Optional[shared_failurecode_enum.FailureCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureCode') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime') }})
    status: Optional[shared_changestatus_enum.ChangeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
