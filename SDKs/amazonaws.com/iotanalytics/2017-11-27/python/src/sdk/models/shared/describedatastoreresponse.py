import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datastore as shared_datastore
from ..shared import datastorestatistics as shared_datastorestatistics


@dataclass_json
@dataclasses.dataclass
class DescribeDatastoreResponse:
    datastore: Optional[shared_datastore.Datastore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastore') }})
    statistics: Optional[shared_datastorestatistics.DatastoreStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    
