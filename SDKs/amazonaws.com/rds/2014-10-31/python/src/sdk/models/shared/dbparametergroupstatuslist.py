import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbParameterGroupStatusList:
    r"""DbParameterGroupStatusList
    <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>CreateDBInstanceReadReplica</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> </ul>
    """
    
    db_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    parameter_apply_status: Optional[str] = dataclasses.field(default=None)
    
