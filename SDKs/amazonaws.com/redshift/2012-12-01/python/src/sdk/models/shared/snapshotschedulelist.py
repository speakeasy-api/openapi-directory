import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import associatedclusterlist as shared_associatedclusterlist
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class SnapshotScheduleList:
    r"""SnapshotScheduleList
    Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. 
    """
    
    associated_cluster_count: Optional[int] = dataclasses.field(default=None)
    associated_clusters: Optional[list[shared_associatedclusterlist.AssociatedClusterList]] = dataclasses.field(default=None)
    next_invocations: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    schedule_definitions: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    schedule_description: Optional[str] = dataclasses.field(default=None)
    schedule_identifier: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    
