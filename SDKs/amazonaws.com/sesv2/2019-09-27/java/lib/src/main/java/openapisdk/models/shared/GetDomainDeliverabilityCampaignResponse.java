package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDomainDeliverabilityCampaignResponse
 * An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
**/
public class GetDomainDeliverabilityCampaignResponse {
    @JsonProperty("DomainDeliverabilityCampaign")
    public DomainDeliverabilityCampaign domainDeliverabilityCampaign;
    public GetDomainDeliverabilityCampaignResponse withDomainDeliverabilityCampaign(DomainDeliverabilityCampaign domainDeliverabilityCampaign) {
        this.domainDeliverabilityCampaign = domainDeliverabilityCampaign;
        return this;
    }
}