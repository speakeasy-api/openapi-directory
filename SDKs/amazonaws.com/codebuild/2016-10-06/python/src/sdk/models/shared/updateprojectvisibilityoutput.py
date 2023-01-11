import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectvisibilitytype_enum as shared_projectvisibilitytype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateProjectVisibilityOutput:
    project_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    project_visibility: Optional[shared_projectvisibilitytype_enum.ProjectVisibilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectVisibility') }})
    public_project_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicProjectAlias') }})
    
