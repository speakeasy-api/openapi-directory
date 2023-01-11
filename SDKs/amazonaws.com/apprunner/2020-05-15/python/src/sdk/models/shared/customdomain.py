import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatevalidationrecord as shared_certificatevalidationrecord
from ..shared import customdomainassociationstatus_enum as shared_customdomainassociationstatus_enum


@dataclass_json
@dataclasses.dataclass
class CustomDomain:
    r"""CustomDomain
    Describes a custom domain that's associated with an AWS App Runner service.
    """
    
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    enable_www_subdomain: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableWWWSubdomain') }})
    status: shared_customdomainassociationstatus_enum.CustomDomainAssociationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    certificate_validation_records: Optional[list[shared_certificatevalidationrecord.CertificateValidationRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateValidationRecords') }})
    
