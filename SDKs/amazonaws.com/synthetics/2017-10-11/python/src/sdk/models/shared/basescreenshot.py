import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BaseScreenshot:
    r"""BaseScreenshot
    A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
    """
    
    screenshot_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScreenshotName') }})
    ignore_coordinates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnoreCoordinates') }})
    
