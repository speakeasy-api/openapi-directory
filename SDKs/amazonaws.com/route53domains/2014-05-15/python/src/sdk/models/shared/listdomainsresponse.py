import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainsummary as shared_domainsummary


@dataclass_json
@dataclasses.dataclass
class ListDomainsResponse:
    r"""ListDomainsResponse
    The ListDomains response includes the following elements.
    """
    
    domains: list[shared_domainsummary.DomainSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domains') }})
    next_page_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageMarker') }})
    
