import dataclasses
from typing import Optional
from ..shared import tablerestorestatuslist as shared_tablerestorestatuslist


@dataclasses.dataclass
class TableRestoreStatusMessage:
    r"""TableRestoreStatusMessage
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    table_restore_status_details: Optional[list[shared_tablerestorestatuslist.TableRestoreStatusList]] = dataclasses.field(default=None)
    
