import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregationtypename_enum as shared_aggregationtypename_enum


@dataclass_json
@dataclasses.dataclass
class AggregationType:
    r"""AggregationType
    The type of aggregation queries.
    """
    
    name: shared_aggregationtypename_enum.AggregationTypeNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
