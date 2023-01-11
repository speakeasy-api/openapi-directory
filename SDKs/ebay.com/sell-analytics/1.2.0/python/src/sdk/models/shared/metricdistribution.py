import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distribution as shared_distribution


@dataclass_json
@dataclasses.dataclass
class MetricDistribution:
    r"""MetricDistribution
    This complex data type describes the metric distribution by basis.
    """
    
    basis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basis') }})
    data: Optional[list[shared_distribution.Distribution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
