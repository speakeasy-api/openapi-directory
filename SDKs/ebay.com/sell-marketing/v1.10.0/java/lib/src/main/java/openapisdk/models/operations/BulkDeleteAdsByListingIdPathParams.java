package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkDeleteAdsByListingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public BulkDeleteAdsByListingIdPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}