import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namedquery as shared_namedquery


@dataclass_json
@dataclasses.dataclass
class GetNamedQueryOutput:
    named_query: Optional[shared_namedquery.NamedQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamedQuery') }})
    
