import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InsightResultValue:
    r"""InsightResultValue
    The insight result values returned by the <code>GetInsightResults</code> operation.
    """
    
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    group_by_attribute_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByAttributeValue') }})
    
