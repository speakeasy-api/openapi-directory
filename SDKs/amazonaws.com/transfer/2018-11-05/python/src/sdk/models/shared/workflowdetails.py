import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowdetail as shared_workflowdetail


@dataclass_json
@dataclasses.dataclass
class WorkflowDetails:
    r"""WorkflowDetails
    Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution.
    """
    
    on_upload: list[shared_workflowdetail.WorkflowDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnUpload') }})
    
