import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChangeCustomColumnRequest:
    r"""ChangeCustomColumnRequest
    The message request to change a custom column expression an user name
    """
    
    encrypted_blockly_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedBlocklyExpression') }})
    encrypted_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedExpression') }})
    user_colum_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userColumName') }})
    
