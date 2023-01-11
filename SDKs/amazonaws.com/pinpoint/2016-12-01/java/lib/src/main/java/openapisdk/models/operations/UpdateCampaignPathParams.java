package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCampaignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateCampaignPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign-id")
    public String campaignId;
    public UpdateCampaignPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}