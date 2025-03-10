"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import migrationtypevalue_enum as shared_migrationtypevalue_enum
from ..shared import tag as shared_tag
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateReplicationTaskMessage:
    r"""<p/>"""
    
    migration_type: shared_migrationtypevalue_enum.MigrationTypeValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MigrationType') }})  
    replication_instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReplicationInstanceArn') }})  
    replication_task_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReplicationTaskIdentifier') }})  
    source_endpoint_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SourceEndpointArn') }})  
    table_mappings: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TableMappings') }})  
    target_endpoint_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TargetEndpointArn') }})  
    cdc_start_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CdcStartPosition'), 'exclude': lambda f: f is None }})  
    cdc_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CdcStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    cdc_stop_position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CdcStopPosition'), 'exclude': lambda f: f is None }})  
    replication_task_settings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReplicationTaskSettings'), 'exclude': lambda f: f is None }})  
    resource_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceIdentifier'), 'exclude': lambda f: f is None }})  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    task_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TaskData'), 'exclude': lambda f: f is None }})  
    