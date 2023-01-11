import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AttackVectorDescription:
    r"""AttackVectorDescription
    Describes the attack.
    """
    
    vector_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VectorType') }})
    
