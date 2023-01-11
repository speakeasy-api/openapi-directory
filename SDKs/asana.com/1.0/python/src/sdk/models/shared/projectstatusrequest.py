import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProjectStatusRequestColorEnum(str, Enum):
    GREEN = "green"
    YELLOW = "yellow"
    RED = "red"
    BLUE = "blue"


@dataclass_json
@dataclasses.dataclass
class ProjectStatusRequestInput:
    r"""ProjectStatusRequestInput
    A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: \"green\" for projects that are on track, \"yellow\" for projects at risk, and \"red\" for projects that are behind.
    """
    
    color: ProjectStatusRequestColorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    html_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_text') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
