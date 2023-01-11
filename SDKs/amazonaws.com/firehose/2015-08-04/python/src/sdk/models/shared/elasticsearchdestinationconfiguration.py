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
from ..shared import s3destinationconfiguration as shared_s3destinationconfiguration
from ..shared import vpcconfiguration as shared_vpcconfiguration


@dataclass_json
@dataclasses.dataclass
class ElasticsearchDestinationConfiguration:
    r"""ElasticsearchDestinationConfiguration
    Describes the configuration of a destination in Amazon ES.
    """
    
    index_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_configuration: shared_s3destinationconfiguration.S3DestinationConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    buffering_hints: Optional[shared_elasticsearchbufferinghints.ElasticsearchBufferingHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[shared_cloudwatchloggingoptions.CloudWatchLoggingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    cluster_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpoint') }})
    domain_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainARN') }})
    index_rotation_period: Optional[shared_elasticsearchindexrotationperiod_enum.ElasticsearchIndexRotationPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexRotationPeriod') }})
    processing_configuration: Optional[shared_processingconfiguration.ProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[shared_elasticsearchretryoptions.ElasticsearchRetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    s3_backup_mode: Optional[shared_elasticsearchs3backupmode_enum.ElasticsearchS3BackupModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    vpc_configuration: Optional[shared_vpcconfiguration.VpcConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfiguration') }})
    
