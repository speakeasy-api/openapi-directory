import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourcedatacolumnproperties as shared_sourcedatacolumnproperties


@dataclass_json
@dataclasses.dataclass
class DestinationOptions:
    r"""DestinationOptions
    An object that contains the options relating to the destination of the import request.
    """
    
    column_map: Optional[dict[str, shared_sourcedatacolumnproperties.SourceDataColumnProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnMap') }})
    
