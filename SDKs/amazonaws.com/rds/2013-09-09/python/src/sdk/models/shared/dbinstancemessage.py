import dataclasses
from typing import Optional
from ..shared import dbinstancelist as shared_dbinstancelist


@dataclasses.dataclass
class DbInstanceMessage:
    db_instances: Optional[list[shared_dbinstancelist.DbInstanceList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
