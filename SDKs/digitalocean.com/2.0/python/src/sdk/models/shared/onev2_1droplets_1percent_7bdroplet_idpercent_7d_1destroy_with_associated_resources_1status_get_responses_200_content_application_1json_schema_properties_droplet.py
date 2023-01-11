import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet:
    r"""Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet
    An object containing information about a resource scheduled for deletion.
    """
    
    destroyed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destroyed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_message') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
