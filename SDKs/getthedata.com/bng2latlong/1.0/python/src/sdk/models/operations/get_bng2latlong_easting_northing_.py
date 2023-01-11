import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetBng2latlongEastingNorthingPathParams:
    easting: int = dataclasses.field(metadata={'path_param': { 'field_name': 'easting', 'style': 'simple', 'explode': False }})
    northing: int = dataclasses.field(metadata={'path_param': { 'field_name': 'northing', 'style': 'simple', 'explode': False }})
    
class GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum(str, Enum):
    OK = "ok"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetBng2latlongEastingNorthing200ApplicationJSON:
    easting: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('easting') }})
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    northing: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('northing') }})
    status: Optional[GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetBng2latlongEastingNorthingRequest:
    path_params: GetBng2latlongEastingNorthingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBng2latlongEastingNorthingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_bng2latlong_easting_northing_200_application_json_object: Optional[GetBng2latlongEastingNorthing200ApplicationJSON] = dataclasses.field(default=None)
    
