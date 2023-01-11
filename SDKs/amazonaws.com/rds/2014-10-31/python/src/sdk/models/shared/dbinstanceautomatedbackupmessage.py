import dataclasses
from typing import Optional
from ..shared import dbinstanceautomatedbackuplist as shared_dbinstanceautomatedbackuplist


@dataclasses.dataclass
class DbInstanceAutomatedBackupMessage:
    r"""DbInstanceAutomatedBackupMessage
     Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action. 
    """
    
    db_instance_automated_backups: Optional[list[shared_dbinstanceautomatedbackuplist.DbInstanceAutomatedBackupList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
