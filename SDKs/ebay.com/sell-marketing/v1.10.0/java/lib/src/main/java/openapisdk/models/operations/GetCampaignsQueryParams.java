package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCampaignsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaign_name")
    public String campaignName;
    public GetCampaignsQueryParams withCampaignName(String campaignName) {
        this.campaignName = campaignName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=campaign_status")
    public String campaignStatus;
    public GetCampaignsQueryParams withCampaignStatus(String campaignStatus) {
        this.campaignStatus = campaignStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date_range")
    public String endDateRange;
    public GetCampaignsQueryParams withEndDateRange(String endDateRange) {
        this.endDateRange = endDateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetCampaignsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetCampaignsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date_range")
    public String startDateRange;
    public GetCampaignsQueryParams withStartDateRange(String startDateRange) {
        this.startDateRange = startDateRange;
        return this;
    }
}