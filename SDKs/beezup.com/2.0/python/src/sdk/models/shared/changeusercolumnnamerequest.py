import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChangeUserColumnNameRequest:
    r"""ChangeUserColumnNameRequest
    The message request for the change user column name
    """
    
    user_colum_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userColumName') }})
    
