import dataclasses
from typing import Any,Optional
from ..shared import optiongroupoptionsettingslist as shared_optiongroupoptionsettingslist
from ..shared import optiongroupoptionversionslist as shared_optiongroupoptionversionslist


@dataclasses.dataclass
class OptionGroupOptionsList:
    r"""OptionGroupOptionsList
    Available option.
    """
    
    default_port: Optional[int] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    engine_name: Optional[str] = dataclasses.field(default=None)
    major_engine_version: Optional[str] = dataclasses.field(default=None)
    minimum_required_minor_engine_version: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    option_group_option_settings: Optional[list[shared_optiongroupoptionsettingslist.OptionGroupOptionSettingsList]] = dataclasses.field(default=None)
    option_group_option_versions: Optional[list[shared_optiongroupoptionversionslist.OptionGroupOptionVersionsList]] = dataclasses.field(default=None)
    options_conflicts_with: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    options_depended_on: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    permanent: Optional[bool] = dataclasses.field(default=None)
    persistent: Optional[bool] = dataclasses.field(default=None)
    port_required: Optional[bool] = dataclasses.field(default=None)
    requires_auto_minor_engine_version_upgrade: Optional[bool] = dataclasses.field(default=None)
    supports_option_version_downgrade: Optional[bool] = dataclasses.field(default=None)
    vpc_only: Optional[bool] = dataclasses.field(default=None)
    
