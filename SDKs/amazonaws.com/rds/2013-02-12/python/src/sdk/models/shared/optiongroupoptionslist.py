import dataclasses
from typing import Any,Optional
from ..shared import optiongroupoptionsettingslist as shared_optiongroupoptionsettingslist


@dataclasses.dataclass
class OptionGroupOptionsList:
    default_port: Optional[int] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    engine_name: Optional[str] = dataclasses.field(default=None)
    major_engine_version: Optional[str] = dataclasses.field(default=None)
    minimum_required_minor_engine_version: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    option_group_option_settings: Optional[list[shared_optiongroupoptionsettingslist.OptionGroupOptionSettingsList]] = dataclasses.field(default=None)
    options_depended_on: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    persistent: Optional[bool] = dataclasses.field(default=None)
    port_required: Optional[bool] = dataclasses.field(default=None)
    
