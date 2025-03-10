"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import resourcestatus_enum as shared_resourcestatus_enum
from ..shared import tag as shared_tag
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class FirewallPolicyResponse:
    r"""The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>."""
    
    firewall_policy_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FirewallPolicyArn') }})  
    firewall_policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FirewallPolicyId') }})  
    firewall_policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FirewallPolicyName') }})  
    consumed_stateful_rule_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConsumedStatefulRuleCapacity'), 'exclude': lambda f: f is None }})  
    consumed_stateless_rule_capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConsumedStatelessRuleCapacity'), 'exclude': lambda f: f is None }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EncryptionConfiguration'), 'exclude': lambda f: f is None }})  
    firewall_policy_status: Optional[shared_resourcestatus_enum.ResourceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FirewallPolicyStatus'), 'exclude': lambda f: f is None }})  
    last_modified_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    number_of_associations: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NumberOfAssociations'), 'exclude': lambda f: f is None }})  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    