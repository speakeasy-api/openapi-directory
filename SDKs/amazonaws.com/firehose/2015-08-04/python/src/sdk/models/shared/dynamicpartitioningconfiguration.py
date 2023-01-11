import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retryoptions as shared_retryoptions


@dataclass_json
@dataclasses.dataclass
class DynamicPartitioningConfiguration:
    r"""DynamicPartitioningConfiguration
    The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations. For more information, see <a href=\"https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html\">https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html</a> 
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    retry_options: Optional[shared_retryoptions.RetryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    
