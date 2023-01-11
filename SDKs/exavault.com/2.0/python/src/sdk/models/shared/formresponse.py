import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import form as shared_form
from ..shared import share as shared_share


@dataclass_json
@dataclasses.dataclass
class FormResponse:
    r"""FormResponse
    Response object for forms.
    """
    
    data: Optional[shared_form.Form] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    included: Optional[list[shared_share.Share]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('included') }})
    response_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseStatus') }})
    
