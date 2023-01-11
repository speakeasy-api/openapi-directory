package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkUpdateAdsBidByListingIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public BulkUpdateAdsBidByListingIdPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}