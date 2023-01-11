import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suggeststatus as shared_suggeststatus
from ..shared import suggestmodel as shared_suggestmodel


@dataclass_json
@dataclasses.dataclass
class SuggestResponse:
    r"""SuggestResponse
    Contains the response to a <code>Suggest</code> request.
    """
    
    status: Optional[shared_suggeststatus.SuggestStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suggest: Optional[shared_suggestmodel.SuggestModel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggest') }})
    
