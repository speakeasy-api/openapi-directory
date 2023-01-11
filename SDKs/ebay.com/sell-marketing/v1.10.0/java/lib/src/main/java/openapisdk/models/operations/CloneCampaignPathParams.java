package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloneCampaignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public CloneCampaignPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}