import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import manageddataidentifiersummary as shared_manageddataidentifiersummary


@dataclass_json
@dataclasses.dataclass
class ListManagedDataIdentifiersResponse:
    items: Optional[list[shared_manageddataidentifiersummary.ManagedDataIdentifierSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
