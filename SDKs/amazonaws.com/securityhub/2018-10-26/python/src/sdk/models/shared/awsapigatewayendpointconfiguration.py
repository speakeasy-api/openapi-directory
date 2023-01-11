import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsAPIGatewayEndpointConfiguration:
    r"""AwsAPIGatewayEndpointConfiguration
    Contains information about the endpoints for the API.
    """
    
    types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Types') }})
    
