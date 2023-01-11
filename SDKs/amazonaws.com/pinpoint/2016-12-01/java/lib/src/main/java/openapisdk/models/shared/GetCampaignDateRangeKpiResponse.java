package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCampaignDateRangeKpiResponse {
    @JsonProperty("CampaignDateRangeKpiResponse")
    public CampaignDateRangeKpiResponse campaignDateRangeKpiResponse;
    public GetCampaignDateRangeKpiResponse withCampaignDateRangeKpiResponse(CampaignDateRangeKpiResponse campaignDateRangeKpiResponse) {
        this.campaignDateRangeKpiResponse = campaignDateRangeKpiResponse;
        return this;
    }
}