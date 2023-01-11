import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iotjobabortcriteria as shared_iotjobabortcriteria


@dataclass_json
@dataclasses.dataclass
class IoTJobAbortConfig:
    r"""IoTJobAbortConfig
    Contains a list of criteria that define when and how to cancel a configuration deployment.
    """
    
    criteria_list: list[shared_iotjobabortcriteria.IoTJobAbortCriteria] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteriaList') }})
    
