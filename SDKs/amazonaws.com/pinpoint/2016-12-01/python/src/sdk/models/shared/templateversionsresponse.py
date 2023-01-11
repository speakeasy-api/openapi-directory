import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import templateversionresponse as shared_templateversionresponse


@dataclass_json
@dataclasses.dataclass
class TemplateVersionsResponse:
    r"""TemplateVersionsResponse
    Provides information about all the versions of a specific message template.
    """
    
    item: list[shared_templateversionresponse.TemplateVersionResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestID') }})
    
