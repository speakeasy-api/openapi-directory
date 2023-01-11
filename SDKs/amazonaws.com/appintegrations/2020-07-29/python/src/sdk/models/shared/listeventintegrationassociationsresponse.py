import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventintegrationassociation as shared_eventintegrationassociation


@dataclass_json
@dataclasses.dataclass
class ListEventIntegrationAssociationsResponse:
    event_integration_associations: Optional[list[shared_eventintegrationassociation.EventIntegrationAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventIntegrationAssociations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
