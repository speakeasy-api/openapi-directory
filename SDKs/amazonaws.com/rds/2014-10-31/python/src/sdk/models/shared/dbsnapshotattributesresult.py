import dataclasses
from typing import Optional
from ..shared import dbsnapshotattributelist as shared_dbsnapshotattributelist


@dataclasses.dataclass
class DbSnapshotAttributesResult:
    r"""DbSnapshotAttributesResult
    <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p>
    """
    
    db_snapshot_attributes: Optional[list[shared_dbsnapshotattributelist.DbSnapshotAttributeList]] = dataclasses.field(default=None)
    db_snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    
