import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import selector as shared_selector


@dataclass_json
@dataclasses.dataclass
class Query:
    r"""Query
    Defines the query to run against an object.
    """
    
    selectors: Optional[list[shared_selector.Selector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectors') }})
    
