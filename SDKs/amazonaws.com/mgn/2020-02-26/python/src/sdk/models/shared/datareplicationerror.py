import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datareplicationerrorstring_enum as shared_datareplicationerrorstring_enum


@dataclass_json
@dataclasses.dataclass
class DataReplicationError:
    r"""DataReplicationError
    Error in data replication.
    """
    
    error: Optional[shared_datareplicationerrorstring_enum.DataReplicationErrorStringEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    raw_error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawError') }})
    
