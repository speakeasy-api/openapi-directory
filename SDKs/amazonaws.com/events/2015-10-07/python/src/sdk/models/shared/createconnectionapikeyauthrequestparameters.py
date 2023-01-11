import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateConnectionAPIKeyAuthRequestParameters:
    r"""CreateConnectionAPIKeyAuthRequestParameters
    Contains the API key authorization parameters for the connection.
    """
    
    api_key_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyName') }})
    api_key_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyValue') }})
    
