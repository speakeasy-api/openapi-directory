package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdsByInventoryReferencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public GetAdsByInventoryReferencePathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}