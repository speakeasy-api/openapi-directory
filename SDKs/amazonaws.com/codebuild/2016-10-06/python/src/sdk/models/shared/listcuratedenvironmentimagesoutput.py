import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentplatform as shared_environmentplatform


@dataclass_json
@dataclasses.dataclass
class ListCuratedEnvironmentImagesOutput:
    platforms: Optional[list[shared_environmentplatform.EnvironmentPlatform]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    
