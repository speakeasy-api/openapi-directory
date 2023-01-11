package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendAnalyticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaign_id")
    public String campaignId;
    public SendAnalyticsQueryParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public SendAnalyticsQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public SendAnalyticsQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=send_id")
    public String sendId;
    public SendAnalyticsQueryParams withSendId(String sendId) {
        this.sendId = sendId;
        return this;
    }
}