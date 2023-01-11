import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowtypeinfo as shared_workflowtypeinfo


@dataclass_json
@dataclasses.dataclass
class WorkflowTypeInfos:
    r"""WorkflowTypeInfos
    Contains a paginated list of information structures about workflow types.
    """
    
    type_infos: list[shared_workflowtypeinfo.WorkflowTypeInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeInfos') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
