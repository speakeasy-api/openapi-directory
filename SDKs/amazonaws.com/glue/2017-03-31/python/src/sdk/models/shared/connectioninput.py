import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectiontype_enum as shared_connectiontype_enum
from ..shared import physicalconnectionrequirements as shared_physicalconnectionrequirements


@dataclass_json
@dataclasses.dataclass
class ConnectionInput:
    r"""ConnectionInput
    A structure that is used to specify a connection to create or update.
    """
    
    connection_properties: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionProperties') }})
    connection_type: shared_connectiontype_enum.ConnectionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionType') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    match_criteria: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchCriteria') }})
    physical_connection_requirements: Optional[shared_physicalconnectionrequirements.PhysicalConnectionRequirements] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhysicalConnectionRequirements') }})
    
