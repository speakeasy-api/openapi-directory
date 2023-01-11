import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum
from ..shared import contactprotocol_enum as shared_contactprotocol_enum
from ..shared import metricname_enum as shared_metricname_enum
from ..shared import alarmstate_enum as shared_alarmstate_enum
from ..shared import treatmissingdata_enum as shared_treatmissingdata_enum


@dataclass_json
@dataclasses.dataclass
class PutAlarmRequest:
    alarm_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmName') }})
    comparison_operator: shared_comparisonoperator_enum.ComparisonOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonOperator') }})
    evaluation_periods: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationPeriods') }})
    metric_name: shared_metricname_enum.MetricNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    monitored_resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResourceName') }})
    threshold: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    contact_protocols: Optional[list[shared_contactprotocol_enum.ContactProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactProtocols') }})
    datapoints_to_alarm: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datapointsToAlarm') }})
    notification_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationEnabled') }})
    notification_triggers: Optional[list[shared_alarmstate_enum.AlarmStateEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTriggers') }})
    treat_missing_data: Optional[shared_treatmissingdata_enum.TreatMissingDataEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treatMissingData') }})
    
