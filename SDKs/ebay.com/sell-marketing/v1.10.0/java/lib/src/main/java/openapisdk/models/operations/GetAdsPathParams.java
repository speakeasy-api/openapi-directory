package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public GetAdsPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}