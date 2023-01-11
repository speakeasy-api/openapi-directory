import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsSqsQueueDetails:
    r"""AwsSqsQueueDetails
    Data about a queue.
    """
    
    dead_letter_target_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterTargetArn') }})
    kms_data_key_reuse_period_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsDataKeyReusePeriodSeconds') }})
    kms_master_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsMasterKeyId') }})
    queue_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueueName') }})
    
