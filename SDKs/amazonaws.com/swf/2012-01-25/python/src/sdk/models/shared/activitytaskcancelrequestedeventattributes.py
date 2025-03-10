"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ActivityTaskCancelRequestedEventAttributes:
    r"""Provides the details of the <code>ActivityTaskCancelRequested</code> event."""
    
    activity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('activityId') }})  
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('decisionTaskCompletedEventId') }})  
    