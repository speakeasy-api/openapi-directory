import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualservicedata as shared_virtualservicedata


@dataclass_json
@dataclasses.dataclass
class UpdateVirtualServiceOutput:
    r"""UpdateVirtualServiceOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    virtual_service: shared_virtualservicedata.VirtualServiceData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualService') }})
    
