import dataclasses
from typing import Optional
from enum import Enum
from ..shared import parameterapplytype_enum as shared_parameterapplytype_enum


@dataclasses.dataclass
class ParametersList:
    r"""ParametersList
    Describes a parameter in a cluster parameter group.
    """
    
    allowed_values: Optional[str] = dataclasses.field(default=None)
    apply_type: Optional[shared_parameterapplytype_enum.ParameterApplyTypeEnum] = dataclasses.field(default=None)
    data_type: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    is_modifiable: Optional[bool] = dataclasses.field(default=None)
    minimum_engine_version: Optional[str] = dataclasses.field(default=None)
    parameter_name: Optional[str] = dataclasses.field(default=None)
    parameter_value: Optional[str] = dataclasses.field(default=None)
    source: Optional[str] = dataclasses.field(default=None)
    
