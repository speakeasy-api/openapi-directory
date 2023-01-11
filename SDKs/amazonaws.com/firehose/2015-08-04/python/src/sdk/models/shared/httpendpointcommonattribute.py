import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HTTPEndpointCommonAttribute:
    r"""HTTPEndpointCommonAttribute
    Describes the metadata that's delivered to the specified HTTP endpoint destination.
    """
    
    attribute_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    attribute_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeValue') }})
    
