import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import updateactionstatus_enum as shared_updateactionstatus_enum


@dataclasses.dataclass
class ProcessedUpdateActionList:
    r"""ProcessedUpdateActionList
    Update action that has been processed for the corresponding apply/stop request
    """
    
    cache_cluster_id: Optional[str] = dataclasses.field(default=None)
    replication_group_id: Optional[str] = dataclasses.field(default=None)
    service_update_name: Optional[str] = dataclasses.field(default=None)
    update_action_status: Optional[shared_updateactionstatus_enum.UpdateActionStatusEnum] = dataclasses.field(default=None)
    
