import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbInstanceAutomatedBackupsReplicationList:
    r"""DbInstanceAutomatedBackupsReplicationList
    Automated backups of a DB instance replicated to another Amazon Web Services Region. They consist of system backups, transaction logs, and database instance properties.
    """
    
    db_instance_automated_backups_arn: Optional[str] = dataclasses.field(default=None)
    
