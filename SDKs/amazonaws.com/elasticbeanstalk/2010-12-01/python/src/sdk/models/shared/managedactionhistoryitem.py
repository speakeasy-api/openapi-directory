import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import actiontype_enum as shared_actiontype_enum
from ..shared import failuretype_enum as shared_failuretype_enum
from ..shared import actionhistorystatus_enum as shared_actionhistorystatus_enum


@dataclasses.dataclass
class ManagedActionHistoryItem:
    r"""ManagedActionHistoryItem
    The record of a completed or failed managed action.
    """
    
    action_description: Optional[str] = dataclasses.field(default=None)
    action_id: Optional[str] = dataclasses.field(default=None)
    action_type: Optional[shared_actiontype_enum.ActionTypeEnum] = dataclasses.field(default=None)
    executed_time: Optional[datetime] = dataclasses.field(default=None)
    failure_description: Optional[str] = dataclasses.field(default=None)
    failure_type: Optional[shared_failuretype_enum.FailureTypeEnum] = dataclasses.field(default=None)
    finished_time: Optional[datetime] = dataclasses.field(default=None)
    status: Optional[shared_actionhistorystatus_enum.ActionHistoryStatusEnum] = dataclasses.field(default=None)
    
