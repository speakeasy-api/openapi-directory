import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import processedupdateactionlist as shared_processedupdateactionlist
from ..shared import unprocessedupdateactionlist as shared_unprocessedupdateactionlist


@dataclasses.dataclass
class UpdateActionResultsMessage:
    processed_update_actions: Optional[list[shared_processedupdateactionlist.ProcessedUpdateActionList]] = dataclasses.field(default=None)
    unprocessed_update_actions: Optional[list[shared_unprocessedupdateactionlist.UnprocessedUpdateActionList]] = dataclasses.field(default=None)
    
