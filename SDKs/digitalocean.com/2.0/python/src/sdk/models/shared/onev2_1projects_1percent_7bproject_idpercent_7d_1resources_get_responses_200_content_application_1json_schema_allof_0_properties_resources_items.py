import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks:
    r"""Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks
    The links object contains the `self` object, which contains the resource relationship.
    """
    
    self: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
class Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum(str, Enum):
    OK = "ok"
    NOT_FOUND = "not_found"
    ASSIGNED = "assigned"
    ALREADY_ASSIGNED = "already_assigned"
    SERVICE_DOWN = "service_down"


@dataclass_json
@dataclasses.dataclass
class Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems:
    assigned_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigned_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    status: Optional[Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    urn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urn') }})
    
