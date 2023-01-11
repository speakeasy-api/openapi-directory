import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReplacementTemplate:
    r"""ReplacementTemplate
    An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.
    """
    
    replacement_template_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplacementTemplateData') }})
    
