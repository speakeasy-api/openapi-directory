import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workgroupconfigurationupdates as shared_workgroupconfigurationupdates
from ..shared import workgroupstate_enum as shared_workgroupstate_enum


@dataclass_json
@dataclasses.dataclass
class UpdateWorkGroupInput:
    work_group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    configuration_updates: Optional[shared_workgroupconfigurationupdates.WorkGroupConfigurationUpdates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationUpdates') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    state: Optional[shared_workgroupstate_enum.WorkGroupStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
