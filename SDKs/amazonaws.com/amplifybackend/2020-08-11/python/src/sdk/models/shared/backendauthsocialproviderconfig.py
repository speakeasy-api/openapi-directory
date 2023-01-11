import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BackendAuthSocialProviderConfig:
    r"""BackendAuthSocialProviderConfig
    Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
    """
    
    client_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    client_secret: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSecret') }})
    
