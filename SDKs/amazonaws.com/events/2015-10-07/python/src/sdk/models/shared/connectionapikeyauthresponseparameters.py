import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectionAPIKeyAuthResponseParameters:
    r"""ConnectionAPIKeyAuthResponseParameters
    Contains the authorization parameters for the connection if API Key is specified as the authorization type.
    """
    
    api_key_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyName') }})
    
