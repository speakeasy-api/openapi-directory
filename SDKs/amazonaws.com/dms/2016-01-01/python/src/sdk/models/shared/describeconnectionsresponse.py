import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connection as shared_connection


@dataclass_json
@dataclasses.dataclass
class DescribeConnectionsResponse:
    r"""DescribeConnectionsResponse
    <p/>
    """
    
    connections: Optional[list[shared_connection.Connection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connections') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
