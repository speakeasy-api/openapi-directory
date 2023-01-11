import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptiontype_enum as shared_encryptiontype_enum


@dataclass_json
@dataclasses.dataclass
class PutRecordOutput:
    r"""PutRecordOutput
    Represents the output for <code>PutRecord</code>.
    """
    
    sequence_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumber') }})
    shard_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    encryption_type: Optional[shared_encryptiontype_enum.EncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    
