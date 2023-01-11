package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndCampaignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public EndCampaignPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}