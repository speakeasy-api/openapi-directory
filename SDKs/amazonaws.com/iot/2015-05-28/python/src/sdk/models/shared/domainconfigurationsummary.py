import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicetype_enum as shared_servicetype_enum


@dataclass_json
@dataclasses.dataclass
class DomainConfigurationSummary:
    r"""DomainConfigurationSummary
    <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an Amazon Web Services-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul>
    """
    
    domain_configuration_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationArn') }})
    domain_configuration_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationName') }})
    service_type: Optional[shared_servicetype_enum.ServiceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    
