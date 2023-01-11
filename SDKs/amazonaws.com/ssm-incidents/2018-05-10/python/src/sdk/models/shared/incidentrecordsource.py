import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IncidentRecordSource:
    r"""IncidentRecordSource
    Details about how the incident record was created and when.
    """
    
    created_by: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    invoked_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invokedBy') }})
    resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    
