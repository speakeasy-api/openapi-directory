import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import tablerestorestatustype_enum as shared_tablerestorestatustype_enum


@dataclasses.dataclass
class TableRestoreStatus:
    r"""TableRestoreStatus
    Describes the status of a <a>RestoreTableFromClusterSnapshot</a> operation.
    """
    
    cluster_identifier: Optional[str] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    new_table_name: Optional[str] = dataclasses.field(default=None)
    progress_in_mega_bytes: Optional[int] = dataclasses.field(default=None)
    request_time: Optional[datetime] = dataclasses.field(default=None)
    snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    source_database_name: Optional[str] = dataclasses.field(default=None)
    source_schema_name: Optional[str] = dataclasses.field(default=None)
    source_table_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_tablerestorestatustype_enum.TableRestoreStatusTypeEnum] = dataclasses.field(default=None)
    table_restore_request_id: Optional[str] = dataclasses.field(default=None)
    target_database_name: Optional[str] = dataclasses.field(default=None)
    target_schema_name: Optional[str] = dataclasses.field(default=None)
    total_data_in_mega_bytes: Optional[int] = dataclasses.field(default=None)
    
