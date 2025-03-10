"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import containerdefinition as shared_containerdefinition
from ..shared import inferenceexecutionconfig as shared_inferenceexecutionconfig
from ..shared import vpcconfig as shared_vpcconfig
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeModelOutput:
    r"""Success"""
    
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    execution_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ExecutionRoleArn') }})  
    model_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ModelArn') }})  
    model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ModelName') }})  
    containers: Optional[list[shared_containerdefinition.ContainerDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Containers'), 'exclude': lambda f: f is None }})  
    enable_network_isolation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EnableNetworkIsolation'), 'exclude': lambda f: f is None }})  
    inference_execution_config: Optional[shared_inferenceexecutionconfig.InferenceExecutionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InferenceExecutionConfig'), 'exclude': lambda f: f is None }})  
    primary_container: Optional[shared_containerdefinition.ContainerDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PrimaryContainer'), 'exclude': lambda f: f is None }})  
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('VpcConfig'), 'exclude': lambda f: f is None }})  
    