import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import elasticsearchbufferinghints as shared_elasticsearchbufferinghints
from ..shared import cloudwatchloggingoptions as shared_cloudwatchloggingoptions
from ..shared import elasticsearchindexrotationperiod_enum as shared_elasticsearchindexrotationperiod_enum
from ..shared import processingconfiguration as shared_processingconfiguration
from ..shared import elasticsearchretryoptions as shared_elasticsearchretryoptions
from ..shared import elasticsearchs3backupmode_enum as shared_elasticsearchs3backupmode_enum
from ..shared import s3destinationdescription as shared_s3destinationdescription
from ..shared import vpcconfigurationdescription as shared_vpcconfigurationdescription


@dataclass_json
@dataclasses.dataclass
class ElasticsearchDestinationDescription:
    r"""ElasticsearchDestinationDescription
    The destination description in Amazon ES.
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
    s3_backup_mode: Optional[shared_elasticsearchs3backupmode_enum.ElasticsearchS3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    s3_destination_description: Optional[shared_s3destinationdescription.S3DestinationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationDescription') }})
    type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    vpc_configuration_description: Optional[shared_vpcconfigurationdescription.VpcConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationDescription') }})
    
