import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionbodyparameter as shared_connectionbodyparameter
from ..shared import connectionheaderparameter as shared_connectionheaderparameter
from ..shared import connectionquerystringparameter as shared_connectionquerystringparameter


@dataclass_json
@dataclasses.dataclass
class ConnectionHTTPParameters:
    r"""ConnectionHTTPParameters
    Contains additional parameters for the connection.
    """
    
    body_parameters: Optional[list[shared_connectionbodyparameter.ConnectionBodyParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BodyParameters') }})
    header_parameters: Optional[list[shared_connectionheaderparameter.ConnectionHeaderParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeaderParameters') }})
    query_string_parameters: Optional[list[shared_connectionquerystringparameter.ConnectionQueryStringParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryStringParameters') }})
    
