import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geomatchset as shared_geomatchset


@dataclass_json
@dataclasses.dataclass
class CreateGeoMatchSetResponse:
    change_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    geo_match_set: Optional[shared_geomatchset.GeoMatchSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeoMatchSet') }})
    
