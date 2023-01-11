package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJourneyDateRangeKpiResponse {
    @JsonProperty("JourneyDateRangeKpiResponse")
    public JourneyDateRangeKpiResponse journeyDateRangeKpiResponse;
    public GetJourneyDateRangeKpiResponse withJourneyDateRangeKpiResponse(JourneyDateRangeKpiResponse journeyDateRangeKpiResponse) {
        this.journeyDateRangeKpiResponse = journeyDateRangeKpiResponse;
        return this;
    }
}