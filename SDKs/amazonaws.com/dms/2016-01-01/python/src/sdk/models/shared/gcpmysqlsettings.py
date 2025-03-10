"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import targetdbtype_enum as shared_targetdbtype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GcpMySQLSettings:
    r"""Settings in JSON format for the source GCP MySQL endpoint."""
    
    after_connect_script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AfterConnectScript'), 'exclude': lambda f: f is None }})  
    clean_source_metadata_on_mismatch: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CleanSourceMetadataOnMismatch'), 'exclude': lambda f: f is None }})  
    database_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DatabaseName'), 'exclude': lambda f: f is None }})  
    events_poll_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EventsPollInterval'), 'exclude': lambda f: f is None }})  
    max_file_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MaxFileSize'), 'exclude': lambda f: f is None }})  
    parallel_load_threads: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ParallelLoadThreads'), 'exclude': lambda f: f is None }})  
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Password'), 'exclude': lambda f: f is None }})  
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Port'), 'exclude': lambda f: f is None }})  
    secrets_manager_access_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SecretsManagerAccessRoleArn'), 'exclude': lambda f: f is None }})  
    secrets_manager_secret_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SecretsManagerSecretId'), 'exclude': lambda f: f is None }})  
    server_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ServerName'), 'exclude': lambda f: f is None }})  
    server_timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ServerTimezone'), 'exclude': lambda f: f is None }})  
    target_db_type: Optional[shared_targetdbtype_enum.TargetDbTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TargetDbType'), 'exclude': lambda f: f is None }})  
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Username'), 'exclude': lambda f: f is None }})  
    