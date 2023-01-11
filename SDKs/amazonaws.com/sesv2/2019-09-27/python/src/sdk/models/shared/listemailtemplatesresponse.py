import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emailtemplatemetadata as shared_emailtemplatemetadata


@dataclass_json
@dataclasses.dataclass
class ListEmailTemplatesResponse:
    r"""ListEmailTemplatesResponse
    The following elements are returned by the service.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    templates_metadata: Optional[list[shared_emailtemplatemetadata.EmailTemplateMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplatesMetadata') }})
    
