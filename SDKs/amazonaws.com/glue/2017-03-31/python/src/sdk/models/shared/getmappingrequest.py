import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import location as shared_location
from ..shared import catalogentry as shared_catalogentry


@dataclass_json
@dataclasses.dataclass
class GetMappingRequest:
    source: shared_catalogentry.CatalogEntry = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    sinks: Optional[list[shared_catalogentry.CatalogEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sinks') }})
    
