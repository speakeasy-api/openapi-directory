import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightresultvalue as shared_insightresultvalue


@dataclass_json
@dataclasses.dataclass
class InsightResults:
    r"""InsightResults
    The insight results returned by the <code>GetInsightResults</code> operation.
    """
    
    group_by_attribute: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByAttribute') }})
    insight_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightArn') }})
    result_values: list[shared_insightresultvalue.InsightResultValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultValues') }})
    
