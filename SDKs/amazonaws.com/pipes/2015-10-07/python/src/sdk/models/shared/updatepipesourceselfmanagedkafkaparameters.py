"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import selfmanagedkafkaaccessconfigurationcredentials as shared_selfmanagedkafkaaccessconfigurationcredentials
from ..shared import selfmanagedkafkaaccessconfigurationvpc as shared_selfmanagedkafkaaccessconfigurationvpc
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdatePipeSourceSelfManagedKafkaParameters:
    r"""The parameters for using a self-managed Apache Kafka stream as a source."""
    
    batch_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BatchSize'), 'exclude': lambda f: f is None }})  
    credentials: Optional[shared_selfmanagedkafkaaccessconfigurationcredentials.SelfManagedKafkaAccessConfigurationCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Credentials'), 'exclude': lambda f: f is None }})  
    maximum_batching_window_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MaximumBatchingWindowInSeconds'), 'exclude': lambda f: f is None }})  
    server_root_ca_certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ServerRootCaCertificate'), 'exclude': lambda f: f is None }})  
    vpc: Optional[shared_selfmanagedkafkaaccessconfigurationvpc.SelfManagedKafkaAccessConfigurationVpc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Vpc'), 'exclude': lambda f: f is None }})  
    