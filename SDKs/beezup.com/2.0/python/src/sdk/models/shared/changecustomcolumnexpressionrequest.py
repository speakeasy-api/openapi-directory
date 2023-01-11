import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChangeCustomColumnExpressionRequest:
    r"""ChangeCustomColumnExpressionRequest
    The request message to change the custom column expression
    """
    
    encrypted_blockly_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedBlocklyExpression') }})
    encrypted_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedExpression') }})
    
