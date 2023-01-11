import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import componentconfigurationupdate as shared_componentconfigurationupdate
from ..shared import componentrunwith as shared_componentrunwith


@dataclass_json
@dataclasses.dataclass
class ComponentDeploymentSpecification:
    component_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    configuration_update: Optional[shared_componentconfigurationupdate.ComponentConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationUpdate') }})
    run_with: Optional[shared_componentrunwith.ComponentRunWith] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runWith') }})
    
