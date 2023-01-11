import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdacodehook as shared_lambdacodehook


@dataclass_json
@dataclasses.dataclass
class CodeHookSpecification:
    r"""CodeHookSpecification
    Contains information about code hooks that Amazon Lex calls during a conversation.
    """
    
    lambda_code_hook: shared_lambdacodehook.LambdaCodeHook = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaCodeHook') }})
    
