import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pointofinterest as shared_pointofinterest


@dataclass_json
@dataclasses.dataclass
class CategoryDetails:
    points_of_interest: Optional[list[shared_pointofinterest.PointOfInterest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PointsOfInterest') }})
    
