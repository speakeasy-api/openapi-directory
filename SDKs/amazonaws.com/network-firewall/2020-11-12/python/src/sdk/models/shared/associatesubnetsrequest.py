import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subnetmapping as shared_subnetmapping


@dataclass_json
@dataclasses.dataclass
class AssociateSubnetsRequest:
    subnet_mappings: list[shared_subnetmapping.SubnetMapping] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetMappings') }})
    firewall_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallArn') }})
    firewall_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallName') }})
    update_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    
