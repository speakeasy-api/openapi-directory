import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activityfailedeventdetails as shared_activityfailedeventdetails
from ..shared import activityschedulefailedeventdetails as shared_activityschedulefailedeventdetails
from ..shared import activityscheduledeventdetails as shared_activityscheduledeventdetails
from ..shared import activitystartedeventdetails as shared_activitystartedeventdetails
from ..shared import activitysucceededeventdetails as shared_activitysucceededeventdetails
from ..shared import activitytimedouteventdetails as shared_activitytimedouteventdetails
from ..shared import executionabortedeventdetails as shared_executionabortedeventdetails
from ..shared import executionfailedeventdetails as shared_executionfailedeventdetails
from ..shared import executionstartedeventdetails as shared_executionstartedeventdetails
from ..shared import executionsucceededeventdetails as shared_executionsucceededeventdetails
from ..shared import executiontimedouteventdetails as shared_executiontimedouteventdetails
from ..shared import lambdafunctionfailedeventdetails as shared_lambdafunctionfailedeventdetails
from ..shared import lambdafunctionschedulefailedeventdetails as shared_lambdafunctionschedulefailedeventdetails
from ..shared import lambdafunctionscheduledeventdetails as shared_lambdafunctionscheduledeventdetails
from ..shared import lambdafunctionstartfailedeventdetails as shared_lambdafunctionstartfailedeventdetails
from ..shared import lambdafunctionsucceededeventdetails as shared_lambdafunctionsucceededeventdetails
from ..shared import lambdafunctiontimedouteventdetails as shared_lambdafunctiontimedouteventdetails
from ..shared import mapiterationeventdetails as shared_mapiterationeventdetails
from ..shared import mapstatestartedeventdetails as shared_mapstatestartedeventdetails
from ..shared import stateenteredeventdetails as shared_stateenteredeventdetails
from ..shared import stateexitedeventdetails as shared_stateexitedeventdetails
from ..shared import taskfailedeventdetails as shared_taskfailedeventdetails
from ..shared import taskscheduledeventdetails as shared_taskscheduledeventdetails
from ..shared import taskstartfailedeventdetails as shared_taskstartfailedeventdetails
from ..shared import taskstartedeventdetails as shared_taskstartedeventdetails
from ..shared import tasksubmitfailedeventdetails as shared_tasksubmitfailedeventdetails
from ..shared import tasksubmittedeventdetails as shared_tasksubmittedeventdetails
from ..shared import tasksucceededeventdetails as shared_tasksucceededeventdetails
from ..shared import tasktimedouteventdetails as shared_tasktimedouteventdetails
from ..shared import historyeventtype_enum as shared_historyeventtype_enum


@dataclass_json
@dataclasses.dataclass
class HistoryEvent:
    r"""HistoryEvent
    Contains details about the events of an execution.
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: shared_historyeventtype_enum.HistoryEventTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    activity_failed_event_details: Optional[shared_activityfailedeventdetails.ActivityFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityFailedEventDetails') }})
    activity_schedule_failed_event_details: Optional[shared_activityschedulefailedeventdetails.ActivityScheduleFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityScheduleFailedEventDetails') }})
    activity_scheduled_event_details: Optional[shared_activityscheduledeventdetails.ActivityScheduledEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityScheduledEventDetails') }})
    activity_started_event_details: Optional[shared_activitystartedeventdetails.ActivityStartedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityStartedEventDetails') }})
    activity_succeeded_event_details: Optional[shared_activitysucceededeventdetails.ActivitySucceededEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activitySucceededEventDetails') }})
    activity_timed_out_event_details: Optional[shared_activitytimedouteventdetails.ActivityTimedOutEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityTimedOutEventDetails') }})
    execution_aborted_event_details: Optional[shared_executionabortedeventdetails.ExecutionAbortedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionAbortedEventDetails') }})
    execution_failed_event_details: Optional[shared_executionfailedeventdetails.ExecutionFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionFailedEventDetails') }})
    execution_started_event_details: Optional[shared_executionstartedeventdetails.ExecutionStartedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStartedEventDetails') }})
    execution_succeeded_event_details: Optional[shared_executionsucceededeventdetails.ExecutionSucceededEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSucceededEventDetails') }})
    execution_timed_out_event_details: Optional[shared_executiontimedouteventdetails.ExecutionTimedOutEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionTimedOutEventDetails') }})
    lambda_function_failed_event_details: Optional[shared_lambdafunctionfailedeventdetails.LambdaFunctionFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionFailedEventDetails') }})
    lambda_function_schedule_failed_event_details: Optional[shared_lambdafunctionschedulefailedeventdetails.LambdaFunctionScheduleFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionScheduleFailedEventDetails') }})
    lambda_function_scheduled_event_details: Optional[shared_lambdafunctionscheduledeventdetails.LambdaFunctionScheduledEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionScheduledEventDetails') }})
    lambda_function_start_failed_event_details: Optional[shared_lambdafunctionstartfailedeventdetails.LambdaFunctionStartFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionStartFailedEventDetails') }})
    lambda_function_succeeded_event_details: Optional[shared_lambdafunctionsucceededeventdetails.LambdaFunctionSucceededEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionSucceededEventDetails') }})
    lambda_function_timed_out_event_details: Optional[shared_lambdafunctiontimedouteventdetails.LambdaFunctionTimedOutEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionTimedOutEventDetails') }})
    map_iteration_aborted_event_details: Optional[shared_mapiterationeventdetails.MapIterationEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapIterationAbortedEventDetails') }})
    map_iteration_failed_event_details: Optional[shared_mapiterationeventdetails.MapIterationEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapIterationFailedEventDetails') }})
    map_iteration_started_event_details: Optional[shared_mapiterationeventdetails.MapIterationEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapIterationStartedEventDetails') }})
    map_iteration_succeeded_event_details: Optional[shared_mapiterationeventdetails.MapIterationEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapIterationSucceededEventDetails') }})
    map_state_started_event_details: Optional[shared_mapstatestartedeventdetails.MapStateStartedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapStateStartedEventDetails') }})
    previous_event_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousEventId') }})
    state_entered_event_details: Optional[shared_stateenteredeventdetails.StateEnteredEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateEnteredEventDetails') }})
    state_exited_event_details: Optional[shared_stateexitedeventdetails.StateExitedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateExitedEventDetails') }})
    task_failed_event_details: Optional[shared_taskfailedeventdetails.TaskFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskFailedEventDetails') }})
    task_scheduled_event_details: Optional[shared_taskscheduledeventdetails.TaskScheduledEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskScheduledEventDetails') }})
    task_start_failed_event_details: Optional[shared_taskstartfailedeventdetails.TaskStartFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartFailedEventDetails') }})
    task_started_event_details: Optional[shared_taskstartedeventdetails.TaskStartedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartedEventDetails') }})
    task_submit_failed_event_details: Optional[shared_tasksubmitfailedeventdetails.TaskSubmitFailedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSubmitFailedEventDetails') }})
    task_submitted_event_details: Optional[shared_tasksubmittedeventdetails.TaskSubmittedEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSubmittedEventDetails') }})
    task_succeeded_event_details: Optional[shared_tasksucceededeventdetails.TaskSucceededEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSucceededEventDetails') }})
    task_timed_out_event_details: Optional[shared_tasktimedouteventdetails.TaskTimedOutEventDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskTimedOutEventDetails') }})
    
