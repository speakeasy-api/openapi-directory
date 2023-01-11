import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldinfo as shared_fieldinfo


@dataclass_json
@dataclasses.dataclass
class QueryInfo:
    r"""QueryInfo
    Details about the query.
    """
    
    select_fields: Optional[list[shared_fieldinfo.FieldInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectFields') }})
    
