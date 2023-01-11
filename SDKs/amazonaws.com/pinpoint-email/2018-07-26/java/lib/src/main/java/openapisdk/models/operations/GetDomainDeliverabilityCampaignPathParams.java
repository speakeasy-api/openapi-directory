package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainDeliverabilityCampaignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CampaignId")
    public String campaignId;
    public GetDomainDeliverabilityCampaignPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}