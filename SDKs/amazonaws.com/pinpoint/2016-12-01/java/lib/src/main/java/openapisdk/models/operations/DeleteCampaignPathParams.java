package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCampaignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteCampaignPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign-id")
    public String campaignId;
    public DeleteCampaignPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}