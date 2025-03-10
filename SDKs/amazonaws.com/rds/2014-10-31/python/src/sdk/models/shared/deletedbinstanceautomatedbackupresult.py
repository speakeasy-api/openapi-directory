"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import dbinstanceautomatedbackup as shared_dbinstanceautomatedbackup
from typing import Optional


@dataclasses.dataclass
class DeleteDBInstanceAutomatedBackupResult:
    r"""Success"""
    
    db_instance_automated_backup: Optional[shared_dbinstanceautomatedbackup.DBInstanceAutomatedBackup] = dataclasses.field(default=None)
    r"""An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance."""  
    