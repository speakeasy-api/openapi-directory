import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namespacesummary as shared_namespacesummary


@dataclass_json
@dataclasses.dataclass
class ListNamespacesResponse:
    namespaces: Optional[list[shared_namespacesummary.NamespaceSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespaces') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
