import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectiontype_enum as shared_connectiontype_enum


@dataclass_json
@dataclasses.dataclass
class GetConnectionsFilter:
    r"""GetConnectionsFilter
    Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.
    """
    
    connection_type: Optional[shared_connectiontype_enum.ConnectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionType') }})
    match_criteria: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchCriteria') }})
    
