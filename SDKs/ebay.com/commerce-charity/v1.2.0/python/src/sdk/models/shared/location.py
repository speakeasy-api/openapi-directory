import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address
from ..shared import geocoordinates as shared_geocoordinates


@dataclass_json
@dataclasses.dataclass
class Location:
    address: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    geo_coordinates: Optional[shared_geocoordinates.GeoCoordinates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoCoordinates') }})
    
