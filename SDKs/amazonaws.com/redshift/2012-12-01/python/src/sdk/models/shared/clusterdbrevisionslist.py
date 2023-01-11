import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import revisiontargetslist as shared_revisiontargetslist


@dataclasses.dataclass
class ClusterDbRevisionsList:
    r"""ClusterDbRevisionsList
    Describes a <code>ClusterDbRevision</code>.
    """
    
    cluster_identifier: Optional[str] = dataclasses.field(default=None)
    current_database_revision: Optional[str] = dataclasses.field(default=None)
    database_revision_release_date: Optional[datetime] = dataclasses.field(default=None)
    revision_targets: Optional[list[shared_revisiontargetslist.RevisionTargetsList]] = dataclasses.field(default=None)
    
