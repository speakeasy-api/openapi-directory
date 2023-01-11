import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionpasswordencryption as shared_connectionpasswordencryption
from ..shared import encryptionatrest as shared_encryptionatrest


@dataclass_json
@dataclasses.dataclass
class DataCatalogEncryptionSettings:
    r"""DataCatalogEncryptionSettings
    Contains configuration information for maintaining Data Catalog security.
    """
    
    connection_password_encryption: Optional[shared_connectionpasswordencryption.ConnectionPasswordEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionPasswordEncryption') }})
    encryption_at_rest: Optional[shared_encryptionatrest.EncryptionAtRest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAtRest') }})
    
