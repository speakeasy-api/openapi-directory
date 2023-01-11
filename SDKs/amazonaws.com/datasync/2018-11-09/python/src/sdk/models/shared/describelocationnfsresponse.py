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
class DescribeLocationNfsResponse:
    r"""DescribeLocationNfsResponse
    DescribeLocationNfsResponse
    """
    
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    location_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationUri') }})
    mount_options: Optional[shared_nfsmountoptions.NfsMountOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    on_prem_config: Optional[shared_onpremconfig.OnPremConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnPremConfig') }})
    
