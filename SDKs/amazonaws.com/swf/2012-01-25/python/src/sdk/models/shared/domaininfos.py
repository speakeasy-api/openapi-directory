import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domaininfo as shared_domaininfo


@dataclass_json
@dataclasses.dataclass
class DomainInfos:
    r"""DomainInfos
    Contains a paginated collection of DomainInfo structures.
    """
    
    domain_infos: list[shared_domaininfo.DomainInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainInfos') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
