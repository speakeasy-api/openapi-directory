import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionconfiguration as shared_encryptionconfiguration


@dataclass_json
@dataclasses.dataclass
class CreateSecurityConfigurationRequest:
    encryption_configuration: shared_encryptionconfiguration.EncryptionConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
