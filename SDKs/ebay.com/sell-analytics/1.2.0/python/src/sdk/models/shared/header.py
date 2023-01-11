import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definition as shared_definition


@dataclass_json
@dataclasses.dataclass
class Header:
    r"""Header
    Type that defines the headers for the dimension keys and metrics returned in the report.
    """
    
    dimension_keys: Optional[list[shared_definition.Definition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionKeys') }})
    metrics: Optional[list[shared_definition.Definition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
