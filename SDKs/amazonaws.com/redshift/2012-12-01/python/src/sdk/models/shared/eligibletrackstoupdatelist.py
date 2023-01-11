import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import supportedoperationlist as shared_supportedoperationlist


@dataclasses.dataclass
class EligibleTracksToUpdateList:
    r"""EligibleTracksToUpdateList
    A maintenance track that you can switch the current track to.
    """
    
    database_version: Optional[str] = dataclasses.field(default=None)
    maintenance_track_name: Optional[str] = dataclasses.field(default=None)
    supported_operations: Optional[list[shared_supportedoperationlist.SupportedOperationList]] = dataclasses.field(default=None)
    
