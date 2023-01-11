import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimension as shared_dimension


@dataclass_json
@dataclasses.dataclass
class PublishMetricAction:
    r"""PublishMetricAction
    Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
    """
    
    dimensions: list[shared_dimension.Dimension] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    
