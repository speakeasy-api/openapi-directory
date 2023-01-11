import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualrouterdata as shared_virtualrouterdata


@dataclass_json
@dataclasses.dataclass
class UpdateVirtualRouterOutput:
    virtual_router: Optional[shared_virtualrouterdata.VirtualRouterData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouter') }})
    
