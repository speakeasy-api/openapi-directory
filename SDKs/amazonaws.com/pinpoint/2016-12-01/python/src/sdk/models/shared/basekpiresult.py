import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resultrow as shared_resultrow


@dataclass_json
@dataclasses.dataclass
class BaseKpiResult:
    r"""BaseKpiResult
    Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
    """
    
    rows: list[shared_resultrow.ResultRow] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rows') }})
    
