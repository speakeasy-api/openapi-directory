package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAdsByInventoryReferencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public CreateAdsByInventoryReferencePathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}