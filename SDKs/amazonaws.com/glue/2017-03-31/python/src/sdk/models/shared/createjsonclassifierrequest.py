import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateJSONClassifierRequest:
    r"""CreateJSONClassifierRequest
    Specifies a JSON classifier for <code>CreateClassifier</code> to create.
    """
    
    json_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonPath') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
