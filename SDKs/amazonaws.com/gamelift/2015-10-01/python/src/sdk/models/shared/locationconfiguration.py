import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LocationConfiguration:
    r"""LocationConfiguration
    <p>A remote location where a multi-location fleet can deploy EC2 instances for game hosting. </p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> </p>
    """
    
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    
