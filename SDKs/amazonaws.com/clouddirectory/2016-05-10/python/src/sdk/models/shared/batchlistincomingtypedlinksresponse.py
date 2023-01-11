import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedlinkspecifier as shared_typedlinkspecifier


@dataclass_json
@dataclasses.dataclass
class BatchListIncomingTypedLinksResponse:
    r"""BatchListIncomingTypedLinksResponse
    Represents the output of a <a>ListIncomingTypedLinks</a> response operation.
    """
    
    link_specifiers: Optional[list[shared_typedlinkspecifier.TypedLinkSpecifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinkSpecifiers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
