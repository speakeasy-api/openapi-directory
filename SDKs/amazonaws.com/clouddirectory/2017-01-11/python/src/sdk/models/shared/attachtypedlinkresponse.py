import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedlinkspecifier as shared_typedlinkspecifier


@dataclass_json
@dataclasses.dataclass
class AttachTypedLinkResponse:
    typed_link_specifier: Optional[shared_typedlinkspecifier.TypedLinkSpecifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifier') }})
    
