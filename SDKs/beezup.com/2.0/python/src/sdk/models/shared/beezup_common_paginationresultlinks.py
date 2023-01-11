import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_link3 as shared_beezup_common_link3


@dataclass_json
@dataclasses.dataclass
class BeezUpCommonPaginationResultLinks:
    r"""BeezUpCommonPaginationResultLinks
    The navigation links 'first', 'last', 'next', 'previous'
    """
    
    first: shared_beezup_common_link3.BeezUpCommonLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: shared_beezup_common_link3.BeezUpCommonLink3 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[shared_beezup_common_link3.BeezUpCommonLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[shared_beezup_common_link3.BeezUpCommonLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    
