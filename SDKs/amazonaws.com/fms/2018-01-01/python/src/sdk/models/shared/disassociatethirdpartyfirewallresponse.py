"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import thirdpartyfirewallassociationstatus_enum as shared_thirdpartyfirewallassociationstatus_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DisassociateThirdPartyFirewallResponse:
    r"""Success"""
    
    third_party_firewall_status: Optional[shared_thirdpartyfirewallassociationstatus_enum.ThirdPartyFirewallAssociationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThirdPartyFirewallStatus'), 'exclude': lambda f: f is None }})  
    