import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumerdescription as shared_consumerdescription


@dataclass_json
@dataclasses.dataclass
class DescribeStreamConsumerOutput:
    consumer_description: shared_consumerdescription.ConsumerDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerDescription') }})
    
