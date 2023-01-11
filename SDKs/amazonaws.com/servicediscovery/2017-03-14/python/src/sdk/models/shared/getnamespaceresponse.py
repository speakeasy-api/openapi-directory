import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namespace as shared_namespace


@dataclass_json
@dataclasses.dataclass
class GetNamespaceResponse:
    namespace: Optional[shared_namespace.Namespace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    
