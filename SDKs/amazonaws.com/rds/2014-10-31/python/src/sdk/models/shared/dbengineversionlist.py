import dataclasses
from typing import Optional
from ..shared import characterset as shared_characterset
from ..shared import supportedcharactersetslist as shared_supportedcharactersetslist
from ..shared import supportedtimezoneslist as shared_supportedtimezoneslist
from ..shared import validupgradetargetlist as shared_validupgradetargetlist


@dataclasses.dataclass
class DbEngineVersionList:
    r"""DbEngineVersionList
     This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
    """
    
    db_engine_description: Optional[str] = dataclasses.field(default=None)
    db_engine_version_description: Optional[str] = dataclasses.field(default=None)
    db_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    default_character_set: Optional[shared_characterset.CharacterSet] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    exportable_log_types: Optional[list[str]] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    supported_character_sets: Optional[list[shared_supportedcharactersetslist.SupportedCharacterSetsList]] = dataclasses.field(default=None)
    supported_engine_modes: Optional[list[str]] = dataclasses.field(default=None)
    supported_feature_names: Optional[list[str]] = dataclasses.field(default=None)
    supported_nchar_character_sets: Optional[list[shared_supportedcharactersetslist.SupportedCharacterSetsList]] = dataclasses.field(default=None)
    supported_timezones: Optional[list[shared_supportedtimezoneslist.SupportedTimezonesList]] = dataclasses.field(default=None)
    supports_global_databases: Optional[bool] = dataclasses.field(default=None)
    supports_log_exports_to_cloudwatch_logs: Optional[bool] = dataclasses.field(default=None)
    supports_parallel_query: Optional[bool] = dataclasses.field(default=None)
    supports_read_replica: Optional[bool] = dataclasses.field(default=None)
    valid_upgrade_target: Optional[list[shared_validupgradetargetlist.ValidUpgradeTargetList]] = dataclasses.field(default=None)
    
