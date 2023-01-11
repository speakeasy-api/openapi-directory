import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Partition:
    r"""Partition
     A partition dimension defined by an attribute. 
    """
    
    attribute_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    
