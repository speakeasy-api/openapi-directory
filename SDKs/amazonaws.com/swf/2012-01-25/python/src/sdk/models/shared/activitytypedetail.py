import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitytypeconfiguration as shared_activitytypeconfiguration
from ..shared import activitytypeinfo as shared_activitytypeinfo


@dataclass_json
@dataclasses.dataclass
class ActivityTypeDetail:
    r"""ActivityTypeDetail
    Detailed information about an activity type.
    """
    
    configuration: shared_activitytypeconfiguration.ActivityTypeConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    type_info: shared_activitytypeinfo.ActivityTypeInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeInfo') }})
    
