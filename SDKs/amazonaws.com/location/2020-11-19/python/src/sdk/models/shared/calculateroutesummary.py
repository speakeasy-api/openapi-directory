import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distanceunit_enum as shared_distanceunit_enum


@dataclass_json
@dataclasses.dataclass
class CalculateRouteSummary:
    r"""CalculateRouteSummary
    A summary of the calculated route.
    """
    
    data_source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    distance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distance') }})
    distance_unit: shared_distanceunit_enum.DistanceUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DistanceUnit') }})
    duration_seconds: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationSeconds') }})
    route_b_box: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteBBox') }})
    
