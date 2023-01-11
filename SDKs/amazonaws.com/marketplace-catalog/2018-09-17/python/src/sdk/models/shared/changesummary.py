import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entity as shared_entity
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class ChangeSummary:
    r"""ChangeSummary
    This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.
    """
    
    change_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeName') }})
    change_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeType') }})
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    entity: Optional[shared_entity.Entity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entity') }})
    error_detail_list: Optional[list[shared_errordetail.ErrorDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetailList') }})
    
