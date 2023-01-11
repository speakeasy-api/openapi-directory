import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import statevalue_enum as shared_statevalue_enum


@dataclasses.dataclass
class CompositeAlarm:
    r"""CompositeAlarm
    The details about a composite alarm.
    """
    
    actions_enabled: Optional[bool] = dataclasses.field(default=None)
    alarm_actions: Optional[list[str]] = dataclasses.field(default=None)
    alarm_arn: Optional[str] = dataclasses.field(default=None)
    alarm_configuration_updated_timestamp: Optional[datetime] = dataclasses.field(default=None)
    alarm_description: Optional[str] = dataclasses.field(default=None)
    alarm_name: Optional[str] = dataclasses.field(default=None)
    alarm_rule: Optional[str] = dataclasses.field(default=None)
    insufficient_data_actions: Optional[list[str]] = dataclasses.field(default=None)
    ok_actions: Optional[list[str]] = dataclasses.field(default=None)
    state_reason: Optional[str] = dataclasses.field(default=None)
    state_reason_data: Optional[str] = dataclasses.field(default=None)
    state_updated_timestamp: Optional[datetime] = dataclasses.field(default=None)
    state_value: Optional[shared_statevalue_enum.StateValueEnum] = dataclasses.field(default=None)
    
