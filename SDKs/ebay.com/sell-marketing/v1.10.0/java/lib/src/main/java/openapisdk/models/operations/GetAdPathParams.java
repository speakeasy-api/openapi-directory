package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ad_id")
    public String adId;
    public GetAdPathParams withAdId(String adId) {
        this.adId = adId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign_id")
    public String campaignId;
    public GetAdPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}