import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedlinkspecifier as shared_typedlinkspecifier


@dataclass_json
@dataclasses.dataclass
class BatchDetachTypedLink:
    r"""BatchDetachTypedLink
    Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
    """
    
    typed_link_specifier: shared_typedlinkspecifier.TypedLinkSpecifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkSpecifier') }})
    
