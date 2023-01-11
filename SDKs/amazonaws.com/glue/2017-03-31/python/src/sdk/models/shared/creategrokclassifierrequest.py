import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateGrokClassifierRequest:
    r"""CreateGrokClassifierRequest
    Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.
    """
    
    classification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    grok_pattern: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrokPattern') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    custom_patterns: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomPatterns') }})
    
