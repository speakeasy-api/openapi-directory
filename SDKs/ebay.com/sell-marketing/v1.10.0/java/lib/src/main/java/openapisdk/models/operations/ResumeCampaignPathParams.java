package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResumeCampaignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public ResumeCampaignPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}