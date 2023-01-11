import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trust as shared_trust


@dataclass_json
@dataclasses.dataclass
class DescribeTrustsResult:
    r"""DescribeTrustsResult
    The result of a DescribeTrust request.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    trusts: Optional[list[shared_trust.Trust]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trusts') }})
    
