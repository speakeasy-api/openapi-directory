import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainconfiguration as shared_domainconfiguration
from ..shared import domaininfo as shared_domaininfo


@dataclass_json
@dataclasses.dataclass
class DomainDetail:
    r"""DomainDetail
    Contains details of a domain.
    """
    
    configuration: shared_domainconfiguration.DomainConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    domain_info: shared_domaininfo.DomainInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainInfo') }})
    
