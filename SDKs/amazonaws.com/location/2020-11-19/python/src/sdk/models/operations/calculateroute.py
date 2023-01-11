import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import truckdimensions as shared_truckdimensions
from ..shared import truckweight as shared_truckweight
from ..shared import calculaterouteresponse as shared_calculaterouteresponse


@dataclasses.dataclass
class CalculateRoutePathParams:
    calculator_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CalculatorName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CalculateRouteHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateRouteRequestBodyCarModeOptions:
    r"""CalculateRouteRequestBodyCarModeOptions
    Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.
    """
    
    avoid_ferries: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvoidFerries') }})
    avoid_tolls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvoidTolls') }})
    
class CalculateRouteRequestBodyDistanceUnitEnum(str, Enum):
    KILOMETERS = "Kilometers"
    MILES = "Miles"

class CalculateRouteRequestBodyTravelModeEnum(str, Enum):
    CAR = "Car"
    TRUCK = "Truck"
    WALKING = "Walking"


@dataclass_json
@dataclasses.dataclass
class CalculateRouteRequestBodyTruckModeOptions:
    r"""CalculateRouteRequestBodyTruckModeOptions
    Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.
    """
    
    avoid_ferries: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvoidFerries') }})
    avoid_tolls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvoidTolls') }})
    dimensions: Optional[shared_truckdimensions.TruckDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    weight: Optional[shared_truckweight.TruckWeight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weight') }})
    

@dataclass_json
@dataclasses.dataclass
class CalculateRouteRequestBody:
    departure_position: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeparturePosition') }})
    destination_position: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPosition') }})
    car_mode_options: Optional[CalculateRouteRequestBodyCarModeOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CarModeOptions') }})
    depart_now: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepartNow') }})
    departure_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepartureTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    distance_unit: Optional[CalculateRouteRequestBodyDistanceUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DistanceUnit') }})
    include_leg_geometry: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeLegGeometry') }})
    travel_mode: Optional[CalculateRouteRequestBodyTravelModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TravelMode') }})
    truck_mode_options: Optional[CalculateRouteRequestBodyTruckModeOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruckModeOptions') }})
    waypoint_positions: Optional[list[list[float]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaypointPositions') }})
    

@dataclasses.dataclass
class CalculateRouteRequest:
    headers: CalculateRouteHeaders = dataclasses.field()
    path_params: CalculateRoutePathParams = dataclasses.field()
    request: CalculateRouteRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CalculateRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    calculate_route_response: Optional[shared_calculaterouteresponse.CalculateRouteResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
