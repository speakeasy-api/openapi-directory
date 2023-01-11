import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domaindeliverabilitycampaign as shared_domaindeliverabilitycampaign


@dataclass_json
@dataclasses.dataclass
class ListDomainDeliverabilityCampaignsResponse:
    r"""ListDomainDeliverabilityCampaignsResponse
    An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
    """
    
    domain_deliverability_campaigns: list[shared_domaindeliverabilitycampaign.DomainDeliverabilityCampaign] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainDeliverabilityCampaigns') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
