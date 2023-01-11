import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provider as shared_provider


@dataclass_json
@dataclasses.dataclass
class EncryptionConfig:
    r"""EncryptionConfig
    The encryption configuration for the cluster.
    """
    
    provider: Optional[shared_provider.Provider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    resources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
