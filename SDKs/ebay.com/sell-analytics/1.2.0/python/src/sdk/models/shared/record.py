import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import value as shared_value


@dataclass_json
@dataclasses.dataclass
class Record:
    r"""Record
    Type that defines the fields of the individual record of the report.
    """
    
    dimension_values: Optional[list[shared_value.Value]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    metric_values: Optional[list[shared_value.Value]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
