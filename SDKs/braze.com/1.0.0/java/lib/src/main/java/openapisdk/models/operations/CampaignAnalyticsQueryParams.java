package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignAnalyticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaign_id")
    public String campaignId;
    public CampaignAnalyticsQueryParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public CampaignAnalyticsQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public CampaignAnalyticsQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
}