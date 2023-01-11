import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import language_enum as shared_language_enum
from ..shared import location as shared_location
from ..shared import mappingentry as shared_mappingentry
from ..shared import catalogentry as shared_catalogentry


@dataclass_json
@dataclasses.dataclass
class GetPlanRequest:
    mapping: list[shared_mappingentry.MappingEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mapping') }})
    source: shared_catalogentry.CatalogEntry = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    additional_plan_options_map: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalPlanOptionsMap') }})
    language: Optional[shared_language_enum.LanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    sinks: Optional[list[shared_catalogentry.CatalogEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sinks') }})
    
