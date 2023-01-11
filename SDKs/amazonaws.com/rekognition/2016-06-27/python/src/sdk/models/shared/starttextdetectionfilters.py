import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regionofinterest as shared_regionofinterest
from ..shared import detectionfilter as shared_detectionfilter


@dataclass_json
@dataclasses.dataclass
class StartTextDetectionFilters:
    r"""StartTextDetectionFilters
    Set of optional parameters that let you set the criteria text must meet to be included in your response. <code>WordFilter</code> looks at a word's height, width and minimum confidence. <code>RegionOfInterest</code> lets you set a specific region of the screen to look for text in.
    """
    
    regions_of_interest: Optional[list[shared_regionofinterest.RegionOfInterest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionsOfInterest') }})
    word_filter: Optional[shared_detectionfilter.DetectionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WordFilter') }})
    
