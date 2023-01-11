import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmenttemplateversionsummary as shared_environmenttemplateversionsummary


@dataclass_json
@dataclasses.dataclass
class ListEnvironmentTemplateVersionsOutput:
    template_versions: list[shared_environmenttemplateversionsummary.EnvironmentTemplateVersionSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateVersions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
