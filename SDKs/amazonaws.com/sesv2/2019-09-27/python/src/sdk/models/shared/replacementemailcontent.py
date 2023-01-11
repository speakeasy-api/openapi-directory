import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replacementtemplate as shared_replacementtemplate


@dataclass_json
@dataclasses.dataclass
class ReplacementEmailContent:
    r"""ReplacementEmailContent
    The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object.
    """
    
    replacement_template: Optional[shared_replacementtemplate.ReplacementTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementTemplate') }})
    
