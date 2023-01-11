import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acknowledgeflow as shared_acknowledgeflow
from ..shared import initializationconfiguration as shared_initializationconfiguration
from ..shared import alarmaction as shared_alarmaction
from ..shared import notificationaction as shared_notificationaction
from ..shared import simplerule as shared_simplerule
from ..shared import updatealarmmodelresponse as shared_updatealarmmodelresponse


@dataclasses.dataclass
class UpdateAlarmModelPathParams:
    alarm_model_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'alarmModelName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAlarmModelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAlarmModelRequestBodyAlarmCapabilities:
    r"""UpdateAlarmModelRequestBodyAlarmCapabilities
    Contains the configuration information of alarm state changes.
    """
    
    acknowledge_flow: Optional[shared_acknowledgeflow.AcknowledgeFlow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgeFlow') }})
    initialization_configuration: Optional[shared_initializationconfiguration.InitializationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationConfiguration') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAlarmModelRequestBodyAlarmEventActions:
    r"""UpdateAlarmModelRequestBodyAlarmEventActions
    Contains information about one or more alarm actions.
    """
    
    alarm_actions: Optional[list[shared_alarmaction.AlarmAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmActions') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAlarmModelRequestBodyAlarmNotification:
    r"""UpdateAlarmModelRequestBodyAlarmNotification
    Contains information about one or more notification actions.
    """
    
    notification_actions: Optional[list[shared_notificationaction.NotificationAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationActions') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAlarmModelRequestBodyAlarmRule:
    r"""UpdateAlarmModelRequestBodyAlarmRule
    Defines when your alarm is invoked.
    """
    
    simple_rule: Optional[shared_simplerule.SimpleRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleRule') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAlarmModelRequestBody:
    alarm_rule: UpdateAlarmModelRequestBodyAlarmRule = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmRule') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    alarm_capabilities: Optional[UpdateAlarmModelRequestBodyAlarmCapabilities] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmCapabilities') }})
    alarm_event_actions: Optional[UpdateAlarmModelRequestBodyAlarmEventActions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmEventActions') }})
    alarm_model_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelDescription') }})
    alarm_notification: Optional[UpdateAlarmModelRequestBodyAlarmNotification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmNotification') }})
    severity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    

@dataclasses.dataclass
class UpdateAlarmModelRequest:
    headers: UpdateAlarmModelHeaders = dataclasses.field()
    path_params: UpdateAlarmModelPathParams = dataclasses.field()
    request: UpdateAlarmModelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAlarmModelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_alarm_model_response: Optional[shared_updatealarmmodelresponse.UpdateAlarmModelResponse] = dataclasses.field(default=None)
    
