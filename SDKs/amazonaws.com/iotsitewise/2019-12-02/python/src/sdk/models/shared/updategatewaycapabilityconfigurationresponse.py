import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capabilitysyncstatus_enum as shared_capabilitysyncstatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdateGatewayCapabilityConfigurationResponse:
    capability_namespace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilityNamespace') }})
    capability_sync_status: shared_capabilitysyncstatus_enum.CapabilitySyncStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilitySyncStatus') }})
    
