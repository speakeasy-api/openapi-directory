import dataclasses
from typing import Optional
from ..shared import dbinstanceautomatedbackup as shared_dbinstanceautomatedbackup


@dataclasses.dataclass
class StartDbInstanceAutomatedBackupsReplicationResult:
    db_instance_automated_backup: Optional[shared_dbinstanceautomatedbackup.DbInstanceAutomatedBackup] = dataclasses.field(default=None)
    
