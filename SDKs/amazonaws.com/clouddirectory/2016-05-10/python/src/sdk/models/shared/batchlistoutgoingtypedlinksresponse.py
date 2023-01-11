import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedlinkspecifier as shared_typedlinkspecifier


@dataclass_json
@dataclasses.dataclass
class BatchListOutgoingTypedLinksResponse:
    r"""BatchListOutgoingTypedLinksResponse
    Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    typed_link_specifiers: Optional[list[shared_typedlinkspecifier.TypedLinkSpecifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifiers') }})
    
