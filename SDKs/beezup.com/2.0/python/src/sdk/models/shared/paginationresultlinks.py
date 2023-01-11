import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link3 as shared_link3


@dataclass_json
@dataclasses.dataclass
class PaginationResultLinks:
    r"""PaginationResultLinks
    The navigation links 'first', 'last', 'next', 'previous'
    """
    
    first: shared_link3.Link3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: shared_link3.Link3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[shared_link3.Link3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_link3.Link3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    
