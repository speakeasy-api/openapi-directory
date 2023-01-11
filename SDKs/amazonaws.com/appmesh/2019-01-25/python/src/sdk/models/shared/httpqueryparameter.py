import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queryparametermatch as shared_queryparametermatch


@dataclass_json
@dataclasses.dataclass
class HTTPQueryParameter:
    r"""HTTPQueryParameter
    An object that represents the query parameter in the request.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    match: Optional[shared_queryparametermatch.QueryParameterMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
