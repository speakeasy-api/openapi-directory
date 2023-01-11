import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewalldomainupdateoperation_enum as shared_firewalldomainupdateoperation_enum


@dataclass_json
@dataclasses.dataclass
class UpdateFirewallDomainsRequest:
    domains: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domains') }})
    firewall_domain_list_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainListId') }})
    operation: shared_firewalldomainupdateoperation_enum.FirewallDomainUpdateOperationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    
