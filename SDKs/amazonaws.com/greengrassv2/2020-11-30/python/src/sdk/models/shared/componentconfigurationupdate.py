import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ComponentConfigurationUpdate:
    r"""ComponentConfigurationUpdate
    Contains information about a deployment's update to a component's configuration on Greengrass core devices. For more information, see <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html\">Update component configurations</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
    """
    
    merge: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merge') }})
    reset: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    
