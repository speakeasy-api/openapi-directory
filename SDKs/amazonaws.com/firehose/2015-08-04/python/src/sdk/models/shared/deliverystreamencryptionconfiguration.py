import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failuredescription as shared_failuredescription
from ..shared import keytype_enum as shared_keytype_enum
from ..shared import deliverystreamencryptionstatus_enum as shared_deliverystreamencryptionstatus_enum


@dataclass_json
@dataclasses.dataclass
class DeliveryStreamEncryptionConfiguration:
    r"""DeliveryStreamEncryptionConfiguration
    Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. 
    """
    
    failure_description: Optional[shared_failuredescription.FailureDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDescription') }})
    key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyARN') }})
    key_type: Optional[shared_keytype_enum.KeyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyType') }})
    status: Optional[shared_deliverystreamencryptionstatus_enum.DeliveryStreamEncryptionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
