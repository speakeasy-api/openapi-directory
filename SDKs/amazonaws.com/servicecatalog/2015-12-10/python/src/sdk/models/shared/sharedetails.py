import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shareerror as shared_shareerror


@dataclass_json
@dataclasses.dataclass
class ShareDetails:
    r"""ShareDetails
    Information about the portfolio share operation.
    """
    
    share_errors: Optional[list[shared_shareerror.ShareError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareErrors') }})
    successful_shares: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessfulShares') }})
    
