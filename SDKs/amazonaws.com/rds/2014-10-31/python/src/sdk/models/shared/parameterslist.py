import dataclasses
from typing import Optional
from enum import Enum
from ..shared import applymethod_enum as shared_applymethod_enum


@dataclasses.dataclass
class ParametersList:
    r"""ParametersList
    <p> This data type is used as a request parameter in the <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions. </p> <p>This data type is used as a response element in the <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p>
    """
    
    allowed_values: Optional[str] = dataclasses.field(default=None)
    apply_method: Optional[shared_applymethod_enum.ApplyMethodEnum] = dataclasses.field(default=None)
    apply_type: Optional[str] = dataclasses.field(default=None)
    data_type: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    is_modifiable: Optional[bool] = dataclasses.field(default=None)
    minimum_engine_version: Optional[str] = dataclasses.field(default=None)
    parameter_name: Optional[str] = dataclasses.field(default=None)
    parameter_value: Optional[str] = dataclasses.field(default=None)
    source: Optional[str] = dataclasses.field(default=None)
    supported_engine_modes: Optional[list[str]] = dataclasses.field(default=None)
    
