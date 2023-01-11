import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionkey as shared_encryptionkey
from ..shared import paralleldataconfig as shared_paralleldataconfig


@dataclass_json
@dataclasses.dataclass
class CreateParallelDataRequest:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parallel_data_config: shared_paralleldataconfig.ParallelDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelDataConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    encryption_key: Optional[shared_encryptionkey.EncryptionKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionKey') }})
    
