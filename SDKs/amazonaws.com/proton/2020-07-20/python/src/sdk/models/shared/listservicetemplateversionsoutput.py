import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicetemplateversionsummary as shared_servicetemplateversionsummary


@dataclass_json
@dataclasses.dataclass
class ListServiceTemplateVersionsOutput:
    template_versions: list[shared_servicetemplateversionsummary.ServiceTemplateVersionSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateVersions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
