import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningtemplatesummary as shared_provisioningtemplatesummary


@dataclass_json
@dataclasses.dataclass
class ListProvisioningTemplatesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    templates: Optional[list[shared_provisioningtemplatesummary.ProvisioningTemplateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templates') }})
    
