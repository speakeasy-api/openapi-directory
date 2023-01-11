import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formfieldentity as shared_formfieldentity


@dataclass_json
@dataclasses.dataclass
class FormFieldSetEntity:
    r"""FormFieldSetEntity
    Create Form Field Set
    """
    
    form_fields: Optional[shared_formfieldentity.FormFieldEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_fields') }})
    form_layout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_layout') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    skip_company: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_company') }})
    skip_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_email') }})
    skip_name: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_name') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
