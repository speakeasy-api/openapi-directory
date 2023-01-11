import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backupstate_enum as shared_backupstate_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class Backup:
    r"""Backup
    Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.
    """
    
    backup_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupId') }})
    backup_state: Optional[shared_backupstate_enum.BackupStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupState') }})
    cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    copy_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    create_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delete_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    never_expires: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NeverExpires') }})
    source_backup: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackup') }})
    source_cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceCluster') }})
    source_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceRegion') }})
    tag_list: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    
