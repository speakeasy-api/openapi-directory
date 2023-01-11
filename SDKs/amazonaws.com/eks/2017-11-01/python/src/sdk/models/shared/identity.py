import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oidc as shared_oidc


@dataclass_json
@dataclasses.dataclass
class Identity:
    r"""Identity
    An object representing an identity provider.
    """
    
    oidc: Optional[shared_oidc.Oidc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidc') }})
    
