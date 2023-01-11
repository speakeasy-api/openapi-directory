import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateKmsKeyRequest:
    kms_key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyId') }})
    log_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    
