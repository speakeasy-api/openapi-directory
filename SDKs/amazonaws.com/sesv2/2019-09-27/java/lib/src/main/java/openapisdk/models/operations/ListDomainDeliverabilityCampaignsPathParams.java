package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDomainDeliverabilityCampaignsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SubscribedDomain")
    public String subscribedDomain;
    public ListDomainDeliverabilityCampaignsPathParams withSubscribedDomain(String subscribedDomain) {
        this.subscribedDomain = subscribedDomain;
        return this;
    }
}