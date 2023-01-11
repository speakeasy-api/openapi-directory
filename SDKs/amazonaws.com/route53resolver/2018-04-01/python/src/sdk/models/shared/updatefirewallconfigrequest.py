import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallfailopenstatus_enum as shared_firewallfailopenstatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdateFirewallConfigRequest:
    firewall_fail_open: shared_firewallfailopenstatus_enum.FirewallFailOpenStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallFailOpen') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    
