import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerdatasetaction as shared_containerdatasetaction
from ..shared import sqlquerydatasetaction as shared_sqlquerydatasetaction


@dataclass_json
@dataclasses.dataclass
class DatasetAction:
    r"""DatasetAction
    A <code>DatasetAction</code> object that specifies how dataset contents are automatically created.
    """
    
    action_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    container_action: Optional[shared_containerdatasetaction.ContainerDatasetAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerAction') }})
    query_action: Optional[shared_sqlquerydatasetaction.SQLQueryDatasetAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryAction') }})
    
