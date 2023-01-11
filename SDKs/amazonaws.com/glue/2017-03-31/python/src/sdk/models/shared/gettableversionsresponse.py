import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tableversion as shared_tableversion


@dataclass_json
@dataclasses.dataclass
class GetTableVersionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    table_versions: Optional[list[shared_tableversion.TableVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableVersions') }})
    
