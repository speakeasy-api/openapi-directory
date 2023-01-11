import dataclasses
from typing import Optional
from ..shared import dbsubnetgroup as shared_dbsubnetgroup


@dataclasses.dataclass
class ModifyDbSubnetGroupResult:
    db_subnet_group: Optional[shared_dbsubnetgroup.DbSubnetGroup] = dataclasses.field(default=None)
    
