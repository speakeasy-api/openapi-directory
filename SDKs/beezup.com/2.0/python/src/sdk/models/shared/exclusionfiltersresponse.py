import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exclusionfilter as shared_exclusionfilter
from ..shared import exclusionfiltersresponselinks as shared_exclusionfiltersresponselinks


@dataclass_json
@dataclasses.dataclass
class ExclusionFiltersResponse:
    links: shared_exclusionfiltersresponselinks.ExclusionFiltersResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    exclusion_filters: Optional[list[shared_exclusionfilter.ExclusionFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionFilters') }})
    
