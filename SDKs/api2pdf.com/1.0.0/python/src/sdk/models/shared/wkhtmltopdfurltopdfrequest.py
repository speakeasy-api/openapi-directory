import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wkhtmltopdfadvancedoptions as shared_wkhtmltopdfadvancedoptions


@dataclass_json
@dataclasses.dataclass
class WkHTMLToPdfURLToPdfRequest:
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    inline_pdf: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlinePdf') }})
    options: Optional[shared_wkhtmltopdfadvancedoptions.WkHTMLToPdfAdvancedOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
