import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formfield as shared_formfield


@dataclass_json
@dataclasses.dataclass
class FormAttributes:
    r"""FormAttributes
    Attributes of the form including it's included fields and css styles
    """
    
    css_styles: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cssStyles') }})
    elements: Optional[list[shared_formfield.FormField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    form_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formDescription') }})
    submit_button_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitButtonText') }})
    success_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successMessage') }})
    
