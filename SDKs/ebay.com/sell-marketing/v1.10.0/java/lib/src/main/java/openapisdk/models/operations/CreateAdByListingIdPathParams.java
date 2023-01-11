package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAdByListingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public CreateAdByListingIdPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}