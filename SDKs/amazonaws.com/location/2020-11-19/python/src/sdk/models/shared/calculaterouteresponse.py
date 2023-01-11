import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leg as shared_leg
from ..shared import calculateroutesummary as shared_calculateroutesummary


@dataclass_json
@dataclasses.dataclass
class CalculateRouteResponse:
    r"""CalculateRouteResponse
    Returns the result of the route calculation. Metadata includes legs and route summary.
    """
    
    legs: list[shared_leg.Leg] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Legs') }})
    summary: shared_calculateroutesummary.CalculateRouteSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
