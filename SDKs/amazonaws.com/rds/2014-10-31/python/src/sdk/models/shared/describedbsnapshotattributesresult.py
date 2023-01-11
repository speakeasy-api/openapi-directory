import dataclasses
from typing import Optional
from ..shared import dbsnapshotattributesresult as shared_dbsnapshotattributesresult


@dataclasses.dataclass
class DescribeDbSnapshotAttributesResult:
    db_snapshot_attributes_result: Optional[shared_dbsnapshotattributesresult.DbSnapshotAttributesResult] = dataclasses.field(default=None)
    
