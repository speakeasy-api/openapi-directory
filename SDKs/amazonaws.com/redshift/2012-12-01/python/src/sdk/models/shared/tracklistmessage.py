import dataclasses
from typing import Optional
from ..shared import tracklist as shared_tracklist


@dataclasses.dataclass
class TrackListMessage:
    maintenance_tracks: Optional[list[shared_tracklist.TrackList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
