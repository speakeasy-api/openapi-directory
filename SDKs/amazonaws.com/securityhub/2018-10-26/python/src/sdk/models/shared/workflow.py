import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowstatus_enum as shared_workflowstatus_enum


@dataclass_json
@dataclasses.dataclass
class Workflow:
    r"""Workflow
    Provides information about the status of the investigation into a finding.
    """
    
    status: Optional[shared_workflowstatus_enum.WorkflowStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
