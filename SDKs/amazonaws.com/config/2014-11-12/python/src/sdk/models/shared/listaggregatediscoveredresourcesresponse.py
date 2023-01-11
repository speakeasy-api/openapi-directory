import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregateresourceidentifier as shared_aggregateresourceidentifier


@dataclass_json
@dataclasses.dataclass
class ListAggregateDiscoveredResourcesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_identifiers: Optional[list[shared_aggregateresourceidentifier.AggregateResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifiers') }})
    
