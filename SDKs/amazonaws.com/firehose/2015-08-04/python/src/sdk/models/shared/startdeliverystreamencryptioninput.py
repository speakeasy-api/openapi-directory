import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverystreamencryptionconfigurationinput as shared_deliverystreamencryptionconfigurationinput


@dataclass_json
@dataclasses.dataclass
class StartDeliveryStreamEncryptionInput:
    delivery_stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamName') }})
    delivery_stream_encryption_configuration_input: Optional[shared_deliverystreamencryptionconfigurationinput.DeliveryStreamEncryptionConfigurationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryStreamEncryptionConfigurationInput') }})
    
