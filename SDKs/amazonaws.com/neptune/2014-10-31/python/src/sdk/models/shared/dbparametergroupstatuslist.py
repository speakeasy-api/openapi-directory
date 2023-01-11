import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbParameterGroupStatusList:
    r"""DbParameterGroupStatusList
    <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul>
    """
    
    db_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    parameter_apply_status: Optional[str] = dataclasses.field(default=None)
    
