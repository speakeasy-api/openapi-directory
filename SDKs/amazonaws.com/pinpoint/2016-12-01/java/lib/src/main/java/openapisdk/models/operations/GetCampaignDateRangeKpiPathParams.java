package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCampaignDateRangeKpiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetCampaignDateRangeKpiPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=campaign-id")
    public String campaignId;
    public GetCampaignDateRangeKpiPathParams withCampaignId(String campaignId) {
        this.campaignId = campaignId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=kpi-name")
    public String kpiName;
    public GetCampaignDateRangeKpiPathParams withKpiName(String kpiName) {
        this.kpiName = kpiName;
        return this;
    }
}