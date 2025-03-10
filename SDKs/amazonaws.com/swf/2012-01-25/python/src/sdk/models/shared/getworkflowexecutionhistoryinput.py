"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import workflowexecution as shared_workflowexecution
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetWorkflowExecutionHistoryInput:
    
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('domain') }})  
    execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('execution') }})  
    maximum_page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maximumPageSize'), 'exclude': lambda f: f is None }})  
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextPageToken'), 'exclude': lambda f: f is None }})  
    reverse_order: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reverseOrder'), 'exclude': lambda f: f is None }})  
    