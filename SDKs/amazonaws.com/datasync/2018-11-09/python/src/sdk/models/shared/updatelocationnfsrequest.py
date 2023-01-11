import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nfsmountoptions as shared_nfsmountoptions
from ..shared import onpremconfig as shared_onpremconfig


@dataclass_json
@dataclasses.dataclass
class UpdateLocationNfsRequest:
    location_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    mount_options: Optional[shared_nfsmountoptions.NfsMountOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    on_prem_config: Optional[shared_onpremconfig.OnPremConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnPremConfig') }})
    subdirectory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    
