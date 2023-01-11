import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subnetgroup as shared_subnetgroup


@dataclass_json
@dataclasses.dataclass
class UpdateSubnetGroupResponse:
    subnet_group: Optional[shared_subnetgroup.SubnetGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetGroup') }})
    
