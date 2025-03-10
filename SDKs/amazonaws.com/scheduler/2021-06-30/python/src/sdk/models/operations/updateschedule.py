"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
import requests as requests_http
from ..shared import deadletterconfig as shared_deadletterconfig
from ..shared import ecsparameters as shared_ecsparameters
from ..shared import eventbridgeparameters as shared_eventbridgeparameters
from ..shared import flexibletimewindowmode_enum as shared_flexibletimewindowmode_enum
from ..shared import kinesisparameters as shared_kinesisparameters
from ..shared import retrypolicy as shared_retrypolicy
from ..shared import sagemakerpipelineparameters as shared_sagemakerpipelineparameters
from ..shared import sqsparameters as shared_sqsparameters
from ..shared import updatescheduleoutput as shared_updatescheduleoutput
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateScheduleRequestBodyFlexibleTimeWindow:
    r"""Allows you to configure a time window during which EventBridge Scheduler invokes the schedule."""
    
    maximum_window_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MaximumWindowInMinutes'), 'exclude': lambda f: f is None }})  
    mode: Optional[shared_flexibletimewindowmode_enum.FlexibleTimeWindowModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Mode'), 'exclude': lambda f: f is None }})  
    
class UpdateScheduleRequestBodyStateEnum(str, Enum):
    r"""Specifies whether the schedule is enabled or disabled."""
    ENABLED = 'ENABLED'
    DISABLED = 'DISABLED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateScheduleRequestBodyTarget:
    r"""The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule."""
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Arn'), 'exclude': lambda f: f is None }})  
    dead_letter_config: Optional[shared_deadletterconfig.DeadLetterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DeadLetterConfig'), 'exclude': lambda f: f is None }})  
    ecs_parameters: Optional[shared_ecsparameters.EcsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EcsParameters'), 'exclude': lambda f: f is None }})  
    event_bridge_parameters: Optional[shared_eventbridgeparameters.EventBridgeParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EventBridgeParameters'), 'exclude': lambda f: f is None }})  
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Input'), 'exclude': lambda f: f is None }})  
    kinesis_parameters: Optional[shared_kinesisparameters.KinesisParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('KinesisParameters'), 'exclude': lambda f: f is None }})  
    retry_policy: Optional[shared_retrypolicy.RetryPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RetryPolicy'), 'exclude': lambda f: f is None }})  
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RoleArn'), 'exclude': lambda f: f is None }})  
    sage_maker_pipeline_parameters: Optional[shared_sagemakerpipelineparameters.SageMakerPipelineParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SageMakerPipelineParameters'), 'exclude': lambda f: f is None }})  
    sqs_parameters: Optional[shared_sqsparameters.SqsParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SqsParameters'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateScheduleRequestBody:
    
    flexible_time_window: UpdateScheduleRequestBodyFlexibleTimeWindow = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FlexibleTimeWindow') }})
    r"""Allows you to configure a time window during which EventBridge Scheduler invokes the schedule."""  
    schedule_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ScheduleExpression') }})
    r"""<p> The expression that defines when the schedule runs. The following formats are supported. </p> <ul> <li> <p> <code>at</code> expression - <code>at(yyyy-mm-ddThh:mm:ss)</code> </p> </li> <li> <p> <code>rate</code> expression - <code>rate(unit value)</code> </p> </li> <li> <p> <code>cron</code> expression - <code>cron(fields)</code> </p> </li> </ul> <p> You can use <code>at</code> expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use <code>rate</code> and <code>cron</code> expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month. </p> <p> A <code>cron</code> expression consists of six fields separated by white spaces: <code>(minutes hours day_of_month month day_of_week year)</code>. </p> <p> A <code>rate</code> expression consists of a <i>value</i> as a positive integer, and a <i>unit</i> with the following options: <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code> </p> <p> For more information and examples, see <a href=\\"https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html\\">Schedule types on EventBridge Scheduler</a> in the <i>EventBridge Scheduler User Guide</i>. </p>"""  
    target: UpdateScheduleRequestBodyTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Target') }})
    r"""The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule."""  
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ClientToken'), 'exclude': lambda f: f is None }})
    r"""Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})
    r"""The description you specify for the schedule."""  
    end_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EndDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the <code>EndDate</code> you specify. EventBridge Scheduler ignores <code>EndDate</code> for one-time schedules."""  
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GroupName'), 'exclude': lambda f: f is None }})
    r"""The name of the schedule group with which the schedule is associated. You must provide this value in order for EventBridge Scheduler to find the schedule you want to update. If you omit this value, EventBridge Scheduler assumes the group is associated to the default group."""  
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('KmsKeyArn'), 'exclude': lambda f: f is None }})
    r"""The ARN for the customer managed KMS key that that you want EventBridge Scheduler to use to encrypt and decrypt your data."""  
    schedule_expression_timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ScheduleExpressionTimezone'), 'exclude': lambda f: f is None }})
    r"""The timezone in which the scheduling expression is evaluated."""  
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StartDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the <code>StartDate</code> you specify. EventBridge Scheduler ignores <code>StartDate</code> for one-time schedules."""  
    state: Optional[UpdateScheduleRequestBodyStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('State'), 'exclude': lambda f: f is None }})
    r"""Specifies whether the schedule is enabled or disabled."""  
    

@dataclasses.dataclass
class UpdateScheduleRequest:
    
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Name', 'style': 'simple', 'explode': False }})
    r"""The name of the schedule that you are updating."""  
    request_body: UpdateScheduleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class UpdateScheduleResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ConflictException"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    update_schedule_output: Optional[shared_updatescheduleoutput.UpdateScheduleOutput] = dataclasses.field(default=None)
    r"""Success"""  
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ValidationException"""  
    