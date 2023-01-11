import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mutationprotectionstatus_enum as shared_mutationprotectionstatus_enum


@dataclass_json
@dataclasses.dataclass
class UpdateFirewallRuleGroupAssociationRequest:
    firewall_rule_group_association_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupAssociationId') }})
    mutation_protection: Optional[shared_mutationprotectionstatus_enum.MutationProtectionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MutationProtection') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    
