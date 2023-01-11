import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import term as shared_term


@dataclass_json
@dataclasses.dataclass
class AppliedTerminology:
    r"""AppliedTerminology
    The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    terms: Optional[list[shared_term.Term]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Terms') }})
    
