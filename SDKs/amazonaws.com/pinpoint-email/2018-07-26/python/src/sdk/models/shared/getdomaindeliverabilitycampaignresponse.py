import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domaindeliverabilitycampaign as shared_domaindeliverabilitycampaign


@dataclass_json
@dataclasses.dataclass
class GetDomainDeliverabilityCampaignResponse:
    r"""GetDomainDeliverabilityCampaignResponse
    An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
    """
    
    domain_deliverability_campaign: shared_domaindeliverabilitycampaign.DomainDeliverabilityCampaign = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainDeliverabilityCampaign') }})
    
