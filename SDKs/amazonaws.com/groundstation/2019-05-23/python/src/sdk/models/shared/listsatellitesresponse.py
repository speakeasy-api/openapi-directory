import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import satellitelistitem as shared_satellitelistitem


@dataclass_json
@dataclasses.dataclass
class ListSatellitesResponse:
    r"""ListSatellitesResponse
    <p/>
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    satellites: Optional[list[shared_satellitelistitem.SatelliteListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satellites') }})
    
