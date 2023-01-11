import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geomatchsetsummary as shared_geomatchsetsummary


@dataclass_json
@dataclasses.dataclass
class ListGeoMatchSetsResponse:
    geo_match_sets: Optional[list[shared_geomatchsetsummary.GeoMatchSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeoMatchSets') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
