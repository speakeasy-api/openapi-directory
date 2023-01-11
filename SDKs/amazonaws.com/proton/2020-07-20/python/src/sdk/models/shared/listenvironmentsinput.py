import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmenttemplatefilter as shared_environmenttemplatefilter


@dataclass_json
@dataclasses.dataclass
class ListEnvironmentsInput:
    environment_templates: Optional[list[shared_environmenttemplatefilter.EnvironmentTemplateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentTemplates') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
