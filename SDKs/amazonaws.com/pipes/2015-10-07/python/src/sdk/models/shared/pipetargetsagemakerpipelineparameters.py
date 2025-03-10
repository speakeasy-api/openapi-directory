"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import sagemakerpipelineparameter as shared_sagemakerpipelineparameter
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PipeTargetSageMakerPipelineParameters:
    r"""The parameters for using a SageMaker pipeline as a target."""
    
    pipeline_parameter_list: Optional[list[shared_sagemakerpipelineparameter.SageMakerPipelineParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PipelineParameterList'), 'exclude': lambda f: f is None }})  
    