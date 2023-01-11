import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import branch as shared_branch


@dataclass_json
@dataclasses.dataclass
class UpdateBranchResult:
    r"""UpdateBranchResult
     The result structure for the update branch request. 
    """
    
    branch: shared_branch.Branch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    
