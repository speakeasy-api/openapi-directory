"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import deploymentconfig as shared_deploymentconfig
from ..shared import tag as shared_tag
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateEndpointInput:
    
    endpoint_config_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EndpointConfigName') }})  
    endpoint_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EndpointName') }})  
    deployment_config: Optional[shared_deploymentconfig.DeploymentConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DeploymentConfig'), 'exclude': lambda f: f is None }})
    r"""The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations."""  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    