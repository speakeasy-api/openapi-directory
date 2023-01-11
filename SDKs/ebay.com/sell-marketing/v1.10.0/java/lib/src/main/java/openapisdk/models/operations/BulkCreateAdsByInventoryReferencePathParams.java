package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkCreateAdsByInventoryReferencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public BulkCreateAdsByInventoryReferencePathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}