import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridproject as shared_testgridproject


@dataclass_json
@dataclasses.dataclass
class UpdateTestGridProjectResult:
    test_grid_project: Optional[shared_testgridproject.TestGridProject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testGridProject') }})
    
