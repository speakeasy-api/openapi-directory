import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import templateresponse as shared_templateresponse


@dataclass_json
@dataclasses.dataclass
class TemplatesResponse:
    r"""TemplatesResponse
    Provides information about all the message templates that are associated with your Amazon Pinpoint account.
    """
    
    item: list[shared_templateresponse.TemplateResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
