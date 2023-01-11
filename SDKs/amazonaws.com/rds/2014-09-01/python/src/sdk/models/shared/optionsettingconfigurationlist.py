import dataclasses
from typing import Optional


@dataclasses.dataclass
class OptionSettingConfigurationList:
    allowed_values: Optional[str] = dataclasses.field(default=None)
    apply_type: Optional[str] = dataclasses.field(default=None)
    data_type: Optional[str] = dataclasses.field(default=None)
    default_value: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    is_collection: Optional[bool] = dataclasses.field(default=None)
    is_modifiable: Optional[bool] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
