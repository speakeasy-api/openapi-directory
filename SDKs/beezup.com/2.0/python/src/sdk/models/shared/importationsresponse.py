import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importationreporting as shared_importationreporting
from ..shared import importationsresponselinks as shared_importationsresponselinks


@dataclass_json
@dataclasses.dataclass
class ImportationsResponse:
    importations: Optional[list[shared_importationreporting.ImportationReporting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importations') }})
    links: Optional[shared_importationsresponselinks.ImportationsResponseLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
