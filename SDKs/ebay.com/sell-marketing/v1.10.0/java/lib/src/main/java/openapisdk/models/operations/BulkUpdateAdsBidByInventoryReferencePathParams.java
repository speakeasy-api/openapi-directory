package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkUpdateAdsBidByInventoryReferencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public BulkUpdateAdsBidByInventoryReferencePathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}