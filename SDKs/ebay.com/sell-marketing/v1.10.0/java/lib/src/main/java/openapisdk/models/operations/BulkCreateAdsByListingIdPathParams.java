package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkCreateAdsByListingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public BulkCreateAdsByListingIdPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}