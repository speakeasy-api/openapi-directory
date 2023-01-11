import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resultrowvalue as shared_resultrowvalue


@dataclass_json
@dataclasses.dataclass
class ResultRow:
    r"""ResultRow
    Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
    """
    
    grouped_bys: list[shared_resultrowvalue.ResultRowValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupedBys') }})
    values: list[shared_resultrowvalue.ResultRowValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
