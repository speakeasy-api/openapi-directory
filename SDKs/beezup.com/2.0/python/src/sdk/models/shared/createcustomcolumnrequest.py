import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateCustomColumnRequest:
    r"""CreateCustomColumnRequest
    The request message to create a custom column
    """
    
    display_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayGroupName') }})
    encrypted_blockly_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedBlocklyExpression') }})
    encrypted_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedExpression') }})
    user_column_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userColumnName') }})
    
