import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainstatus_enum as shared_domainstatus_enum
from ..shared import subdomain as shared_subdomain


@dataclass_json
@dataclasses.dataclass
class DomainAssociation:
    r"""DomainAssociation
     Describes a domain association that associates a custom domain with an Amplify app. 
    """
    
    domain_association_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainAssociationArn') }})
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_status: shared_domainstatus_enum.DomainStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainStatus') }})
    enable_auto_sub_domain: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoSubDomain') }})
    status_reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    sub_domains: list[shared_subdomain.SubDomain] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subDomains') }})
    auto_sub_domain_creation_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoSubDomainCreationPatterns') }})
    auto_sub_domain_iam_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoSubDomainIAMRole') }})
    certificate_verification_dns_record: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateVerificationDNSRecord') }})
    
