"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import environmentparameterranges as shared_environmentparameterranges
from ..shared import productionvariantinstancetype_enum as shared_productionvariantinstancetype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EndpointInputConfiguration:
    r"""The endpoint configuration for the load test."""
    
    instance_type: shared_productionvariantinstancetype_enum.ProductionVariantInstanceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InstanceType') }})  
    environment_parameter_ranges: Optional[shared_environmentparameterranges.EnvironmentParameterRanges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EnvironmentParameterRanges'), 'exclude': lambda f: f is None }})  
    inference_specification_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InferenceSpecificationName'), 'exclude': lambda f: f is None }})  
    