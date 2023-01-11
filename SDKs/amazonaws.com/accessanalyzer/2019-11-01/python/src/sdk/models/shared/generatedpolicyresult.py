import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import generatedpolicy as shared_generatedpolicy


@dataclass_json
@dataclasses.dataclass
class GeneratedPolicyResult:
    r"""GeneratedPolicyResult
    Contains the text for the generated policy and its details.
    """
    
    properties: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    generated_policies: Optional[list[shared_generatedpolicy.GeneratedPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedPolicies') }})
    
