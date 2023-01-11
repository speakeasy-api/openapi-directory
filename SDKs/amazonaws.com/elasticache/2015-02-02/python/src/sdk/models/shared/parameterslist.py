import dataclasses
from typing import Optional
from enum import Enum
from ..shared import changetype_enum as shared_changetype_enum


@dataclasses.dataclass
class ParametersList:
    r"""ParametersList
    Describes an individual setting that controls some aspect of ElastiCache behavior.
    """
    
    allowed_values: Optional[str] = dataclasses.field(default=None)
    change_type: Optional[shared_changetype_enum.ChangeTypeEnum] = dataclasses.field(default=None)
    data_type: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    is_modifiable: Optional[bool] = dataclasses.field(default=None)
    minimum_engine_version: Optional[str] = dataclasses.field(default=None)
    parameter_name: Optional[str] = dataclasses.field(default=None)
    parameter_value: Optional[str] = dataclasses.field(default=None)
    source: Optional[str] = dataclasses.field(default=None)
    
