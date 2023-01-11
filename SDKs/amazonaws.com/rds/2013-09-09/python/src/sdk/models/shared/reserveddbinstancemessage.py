import dataclasses
from typing import Optional
from ..shared import reserveddbinstancelist as shared_reserveddbinstancelist


@dataclasses.dataclass
class ReservedDbInstanceMessage:
    marker: Optional[str] = dataclasses.field(default=None)
    reserved_db_instances: Optional[list[shared_reserveddbinstancelist.ReservedDbInstanceList]] = dataclasses.field(default=None)
    
