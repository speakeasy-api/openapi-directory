import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizationconfig as shared_authorizationconfig


@dataclass_json
@dataclasses.dataclass
class HTTPDataSourceConfig:
    r"""HTTPDataSourceConfig
    Describes an HTTP data source configuration.
    """
    
    authorization_config: Optional[shared_authorizationconfig.AuthorizationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationConfig') }})
    endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    
