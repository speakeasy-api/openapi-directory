import dataclasses
from typing import Optional
from ..shared import dbengineversionlist as shared_dbengineversionlist


@dataclasses.dataclass
class DbEngineVersionMessage:
    r"""DbEngineVersionMessage
    Represents the output of <a>DescribeDBEngineVersions</a>.
    """
    
    db_engine_versions: Optional[list[shared_dbengineversionlist.DbEngineVersionList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
