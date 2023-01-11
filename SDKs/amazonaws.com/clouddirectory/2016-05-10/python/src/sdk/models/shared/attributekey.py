import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AttributeKey:
    r"""AttributeKey
    A unique identifier for an attribute.
    """
    
    facet_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FacetName') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    schema_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    
