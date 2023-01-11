import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backfillerror as shared_backfillerror
from ..shared import partitionindexstatus_enum as shared_partitionindexstatus_enum
from ..shared import keyschemaelement as shared_keyschemaelement


@dataclass_json
@dataclasses.dataclass
class PartitionIndexDescriptor:
    r"""PartitionIndexDescriptor
    A descriptor for a partition index in a table.
    """
    
    index_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    index_status: shared_partitionindexstatus_enum.PartitionIndexStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexStatus') }})
    keys: list[shared_keyschemaelement.KeySchemaElement] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    backfill_errors: Optional[list[shared_backfillerror.BackfillError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackfillErrors') }})
    
