import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateConnectionOAuthClientRequestParameters:
    r"""CreateConnectionOAuthClientRequestParameters
    Contains the Basic authorization parameters to use for the connection.
    """
    
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSecret') }})
    
