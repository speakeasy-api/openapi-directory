import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import eligibletrackstoupdatelist as shared_eligibletrackstoupdatelist


@dataclasses.dataclass
class TrackList:
    r"""TrackList
    Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release. 
    """
    
    database_version: Optional[str] = dataclasses.field(default=None)
    maintenance_track_name: Optional[str] = dataclasses.field(default=None)
    update_targets: Optional[list[shared_eligibletrackstoupdatelist.EligibleTracksToUpdateList]] = dataclasses.field(default=None)
    
