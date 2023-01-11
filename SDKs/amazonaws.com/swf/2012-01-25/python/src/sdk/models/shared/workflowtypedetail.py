import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowtypeconfiguration as shared_workflowtypeconfiguration
from ..shared import workflowtypeinfo as shared_workflowtypeinfo


@dataclass_json
@dataclasses.dataclass
class WorkflowTypeDetail:
    r"""WorkflowTypeDetail
    Contains details about a workflow type.
    """
    
    configuration: shared_workflowtypeconfiguration.WorkflowTypeConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    type_info: shared_workflowtypeinfo.WorkflowTypeInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeInfo') }})
    
