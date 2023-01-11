import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import desiredconfiguration as shared_desiredconfiguration
from ..shared import refreshpreferences as shared_refreshpreferences
from ..shared import instancerefreshprogressdetails as shared_instancerefreshprogressdetails
from ..shared import instancerefreshstatus_enum as shared_instancerefreshstatus_enum


@dataclasses.dataclass
class InstanceRefresh:
    r"""InstanceRefresh
    Describes an instance refresh for an Auto Scaling group. 
    """
    
    auto_scaling_group_name: Optional[str] = dataclasses.field(default=None)
    desired_configuration: Optional[shared_desiredconfiguration.DesiredConfiguration] = dataclasses.field(default=None)
    end_time: Optional[datetime] = dataclasses.field(default=None)
    instance_refresh_id: Optional[str] = dataclasses.field(default=None)
    instances_to_update: Optional[int] = dataclasses.field(default=None)
    percentage_complete: Optional[int] = dataclasses.field(default=None)
    preferences: Optional[shared_refreshpreferences.RefreshPreferences] = dataclasses.field(default=None)
    progress_details: Optional[shared_instancerefreshprogressdetails.InstanceRefreshProgressDetails] = dataclasses.field(default=None)
    start_time: Optional[datetime] = dataclasses.field(default=None)
    status: Optional[shared_instancerefreshstatus_enum.InstanceRefreshStatusEnum] = dataclasses.field(default=None)
    status_reason: Optional[str] = dataclasses.field(default=None)
    
