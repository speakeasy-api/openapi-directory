import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewalldomainimportoperation_enum as shared_firewalldomainimportoperation_enum


@dataclass_json
@dataclasses.dataclass
class ImportFirewallDomainsRequest:
    domain_file_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainFileUrl') }})
    firewall_domain_list_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainListId') }})
    operation: shared_firewalldomainimportoperation_enum.FirewallDomainImportOperationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    
