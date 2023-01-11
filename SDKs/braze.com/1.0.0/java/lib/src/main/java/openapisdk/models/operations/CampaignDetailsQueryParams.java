package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CampaignDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaign_id")
    public String campaignId;
    public CampaignDetailsQueryParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
}