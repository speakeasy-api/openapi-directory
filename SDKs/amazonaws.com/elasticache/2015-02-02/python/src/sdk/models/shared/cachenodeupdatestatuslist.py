import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import nodeupdateinitiatedby_enum as shared_nodeupdateinitiatedby_enum
from ..shared import nodeupdatestatus_enum as shared_nodeupdatestatus_enum


@dataclasses.dataclass
class CacheNodeUpdateStatusList:
    r"""CacheNodeUpdateStatusList
    The status of the service update on the cache node
    """
    
    cache_node_id: Optional[str] = dataclasses.field(default=None)
    node_deletion_date: Optional[datetime] = dataclasses.field(default=None)
    node_update_end_date: Optional[datetime] = dataclasses.field(default=None)
    node_update_initiated_by: Optional[shared_nodeupdateinitiatedby_enum.NodeUpdateInitiatedByEnum] = dataclasses.field(default=None)
    node_update_initiated_date: Optional[datetime] = dataclasses.field(default=None)
    node_update_start_date: Optional[datetime] = dataclasses.field(default=None)
    node_update_status: Optional[shared_nodeupdatestatus_enum.NodeUpdateStatusEnum] = dataclasses.field(default=None)
    node_update_status_modified_date: Optional[datetime] = dataclasses.field(default=None)
    
