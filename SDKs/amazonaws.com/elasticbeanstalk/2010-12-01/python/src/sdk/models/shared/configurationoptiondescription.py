import dataclasses
from typing import Optional
from enum import Enum
from ..shared import optionrestrictionregex as shared_optionrestrictionregex
from ..shared import configurationoptionvaluetype_enum as shared_configurationoptionvaluetype_enum


@dataclasses.dataclass
class ConfigurationOptionDescription:
    r"""ConfigurationOptionDescription
    Describes the possible values for a configuration option.
    """
    
    change_severity: Optional[str] = dataclasses.field(default=None)
    default_value: Optional[str] = dataclasses.field(default=None)
    max_length: Optional[int] = dataclasses.field(default=None)
    max_value: Optional[int] = dataclasses.field(default=None)
    min_value: Optional[int] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    namespace: Optional[str] = dataclasses.field(default=None)
    regex: Optional[shared_optionrestrictionregex.OptionRestrictionRegex] = dataclasses.field(default=None)
    user_defined: Optional[bool] = dataclasses.field(default=None)
    value_options: Optional[list[str]] = dataclasses.field(default=None)
    value_type: Optional[shared_configurationoptionvaluetype_enum.ConfigurationOptionValueTypeEnum] = dataclasses.field(default=None)
    
