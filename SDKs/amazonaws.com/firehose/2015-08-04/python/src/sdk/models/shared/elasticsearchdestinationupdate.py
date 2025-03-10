"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import elasticsearchbufferinghints as shared_elasticsearchbufferinghints
from ..shared import elasticsearchindexrotationperiod_enum as shared_elasticsearchindexrotationperiod_enum
from ..shared import elasticsearchretryoptions as shared_elasticsearchretryoptions
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import s3destinationupdate as shared_s3destinationupdate
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ElasticsearchDestinationUpdate:
    r"""Describes an update for a destination in Amazon ES."""
    
    buffering_hints: Optional[shared_elasticsearchbufferinghints.ElasticsearchBufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BufferingHints'), 'exclude': lambda f: f is None }})  
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CloudWatchLoggingOptions'), 'exclude': lambda f: f is None }})  
    cluster_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ClusterEndpoint'), 'exclude': lambda f: f is None }})  
    domain_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DomainARN'), 'exclude': lambda f: f is None }})  
    index_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IndexName'), 'exclude': lambda f: f is None }})  
    index_rotation_period: Optional[shared_elasticsearchindexrotationperiod_enum.ElasticsearchIndexRotationPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IndexRotationPeriod'), 'exclude': lambda f: f is None }})  
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessingConfiguration'), 'exclude': lambda f: f is None }})  
    retry_options: Optional[shared_elasticsearchretryoptions.ElasticsearchRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RetryOptions'), 'exclude': lambda f: f is None }})  
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RoleARN'), 'exclude': lambda f: f is None }})  
    s3_update: Optional[shared_s3destinationupdate.S3DestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('S3Update'), 'exclude': lambda f: f is None }})  
    type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TypeName'), 'exclude': lambda f: f is None }})  
    