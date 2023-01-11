import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchprediction as shared_batchprediction


@dataclass_json
@dataclasses.dataclass
class DescribeBatchPredictionsOutput:
    r"""DescribeBatchPredictionsOutput
    Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    results: Optional[list[shared_batchprediction.BatchPrediction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    
