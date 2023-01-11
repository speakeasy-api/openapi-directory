import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import syntaxtoken as shared_syntaxtoken


@dataclass_json
@dataclasses.dataclass
class BatchDetectSyntaxItemResult:
    r"""BatchDetectSyntaxItemResult
    The result of calling the operation. The operation returns one object that is successfully processed by the operation.
    """
    
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    syntax_tokens: Optional[list[shared_syntaxtoken.SyntaxToken]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyntaxTokens') }})
    
