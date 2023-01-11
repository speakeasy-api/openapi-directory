import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataretrievalrule as shared_dataretrievalrule


@dataclass_json
@dataclasses.dataclass
class DataRetrievalPolicy:
    r"""DataRetrievalPolicy
    Data retrieval policy.
    """
    
    rules: Optional[list[shared_dataretrievalrule.DataRetrievalRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
