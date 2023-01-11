import dataclasses
from typing import Optional
from ..shared import minimumengineversionperallowedvaluelist as shared_minimumengineversionperallowedvaluelist


@dataclasses.dataclass
class OptionGroupOptionSettingsList:
    r"""OptionGroupOptionSettingsList
    Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
    """
    
    allowed_values: Optional[str] = dataclasses.field(default=None)
    apply_type: Optional[str] = dataclasses.field(default=None)
    default_value: Optional[str] = dataclasses.field(default=None)
    is_modifiable: Optional[bool] = dataclasses.field(default=None)
    is_required: Optional[bool] = dataclasses.field(default=None)
    minimum_engine_version_per_allowed_value: Optional[list[shared_minimumengineversionperallowedvaluelist.MinimumEngineVersionPerAllowedValueList]] = dataclasses.field(default=None)
    setting_description: Optional[str] = dataclasses.field(default=None)
    setting_name: Optional[str] = dataclasses.field(default=None)
    
