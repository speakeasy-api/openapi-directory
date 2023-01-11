import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HTTPParameters:
    r"""HTTPParameters
    These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
    """
    
    header_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeaderParameters') }})
    path_parameter_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathParameterValues') }})
    query_string_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryStringParameters') }})
    
