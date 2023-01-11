import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderfiltercriteria as shared_orderfiltercriteria


@dataclass_json
@dataclasses.dataclass
class CreateOrderTaskRequest:
    r"""CreateOrderTaskRequest
    The type that defines the fields for the createOrderTask request.
    """
    
    feed_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    filter_criteria: Optional[shared_orderfiltercriteria.OrderFilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    schema_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    
