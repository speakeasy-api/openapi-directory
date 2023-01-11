import dataclasses
from typing import Optional
from ..shared import validupgradetargetlist as shared_validupgradetargetlist


@dataclasses.dataclass
class DbEngineVersionList:
    r"""DbEngineVersionList
     Detailed information about an engine version. 
    """
    
    db_engine_description: Optional[str] = dataclasses.field(default=None)
    db_engine_version_description: Optional[str] = dataclasses.field(default=None)
    db_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    exportable_log_types: Optional[list[str]] = dataclasses.field(default=None)
    supports_log_exports_to_cloudwatch_logs: Optional[bool] = dataclasses.field(default=None)
    valid_upgrade_target: Optional[list[shared_validupgradetargetlist.ValidUpgradeTargetList]] = dataclasses.field(default=None)
    
