import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkprofile as shared_networkprofile


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkProfileResult:
    network_profile: Optional[shared_networkprofile.NetworkProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfile') }})
    
