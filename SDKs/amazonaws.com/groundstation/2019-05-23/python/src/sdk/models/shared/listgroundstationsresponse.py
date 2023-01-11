import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groundstationdata as shared_groundstationdata


@dataclass_json
@dataclasses.dataclass
class ListGroundStationsResponse:
    r"""ListGroundStationsResponse
    <p/>
    """
    
    ground_station_list: Optional[list[shared_groundstationdata.GroundStationData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groundStationList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
