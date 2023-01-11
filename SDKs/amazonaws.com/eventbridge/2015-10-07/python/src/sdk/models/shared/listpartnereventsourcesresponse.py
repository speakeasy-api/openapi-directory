import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partnereventsource as shared_partnereventsource


@dataclass_json
@dataclasses.dataclass
class ListPartnerEventSourcesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    partner_event_sources: Optional[list[shared_partnereventsource.PartnerEventSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartnerEventSources') }})
    
