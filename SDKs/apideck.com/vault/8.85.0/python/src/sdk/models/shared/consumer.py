import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumerconnection as shared_consumerconnection
from ..shared import consumermetadata as shared_consumermetadata
from ..shared import requestcountallocation as shared_requestcountallocation


@dataclass_json
@dataclasses.dataclass
class Consumer:
    aggregated_request_count: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregated_request_count') }})
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    connections: Optional[list[shared_consumerconnection.ConsumerConnection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    consumer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer_id') }})
    created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    metadata: Optional[shared_consumermetadata.ConsumerMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    request_count_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_count_updated') }})
    request_counts: Optional[shared_requestcountallocation.RequestCountAllocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_counts') }})
    services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
