package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCampaignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public DeleteCampaignPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}