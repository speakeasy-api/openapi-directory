import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateXMLClassifierRequest:
    r"""CreateXMLClassifierRequest
    Specifies an XML classifier for <code>CreateClassifier</code> to create.
    """
    
    classification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    row_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowTag') }})
    
