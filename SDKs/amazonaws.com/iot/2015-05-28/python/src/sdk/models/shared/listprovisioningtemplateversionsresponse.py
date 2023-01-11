import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningtemplateversionsummary as shared_provisioningtemplateversionsummary


@dataclass_json
@dataclasses.dataclass
class ListProvisioningTemplateVersionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    versions: Optional[list[shared_provisioningtemplateversionsummary.ProvisioningTemplateVersionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
