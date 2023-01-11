import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import actiontype_enum as shared_actiontype_enum
from ..shared import actionstatus_enum as shared_actionstatus_enum


@dataclasses.dataclass
class ManagedAction:
    r"""ManagedAction
    The record of an upcoming or in-progress managed action.
    """
    
    action_description: Optional[str] = dataclasses.field(default=None)
    action_id: Optional[str] = dataclasses.field(default=None)
    action_type: Optional[shared_actiontype_enum.ActionTypeEnum] = dataclasses.field(default=None)
    status: Optional[shared_actionstatus_enum.ActionStatusEnum] = dataclasses.field(default=None)
    window_start_time: Optional[datetime] = dataclasses.field(default=None)
    
