package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCampaignByNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaign_name")
    public String campaignName;
    public GetCampaignByNameQueryParams withCampaignName(String campaignName) {
        this.campaignName = campaignName;
        return this;
    }
}