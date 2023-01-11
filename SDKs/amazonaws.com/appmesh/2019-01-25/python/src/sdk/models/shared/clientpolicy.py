import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientpolicytls as shared_clientpolicytls


@dataclass_json
@dataclasses.dataclass
class ClientPolicy:
    r"""ClientPolicy
    An object that represents a client policy.
    """
    
    tls: Optional[shared_clientpolicytls.ClientPolicyTLS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
