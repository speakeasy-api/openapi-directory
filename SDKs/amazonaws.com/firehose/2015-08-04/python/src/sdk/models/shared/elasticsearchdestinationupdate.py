import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import elasticsearchbufferinghints as shared_elasticsearchbufferinghints
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import elasticsearchindexrotationperiod_enum as shared_elasticsearchindexrotationperiod_enum
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import elasticsearchretryoptions as shared_elasticsearchretryoptions
from ..shared import s3destinationupdate as shared_s3destinationupdate


@dataclass_json
@dataclasses.dataclass
class ElasticsearchDestinationUpdate:
    r"""ElasticsearchDestinationUpdate
    Describes an update for a destination in Amazon ES.
    """
    
    buffering_hints: Optional[shared_elasticsearchbufferinghints.ElasticsearchBufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    cluster_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpoint') }})
    domain_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainARN') }})
    index_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    index_rotation_period: Optional[shared_elasticsearchindexrotationperiod_enum.ElasticsearchIndexRotationPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexRotationPeriod') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[shared_elasticsearchretryoptions.ElasticsearchRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_update: Optional[shared_s3destinationupdate.S3DestinationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Update') }})
    type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    
