package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJourneyExecutionActivityMetricsResponse {
    @JsonProperty("JourneyExecutionActivityMetricsResponse")
    public JourneyExecutionActivityMetricsResponse journeyExecutionActivityMetricsResponse;
    public GetJourneyExecutionActivityMetricsResponse withJourneyExecutionActivityMetricsResponse(JourneyExecutionActivityMetricsResponse journeyExecutionActivityMetricsResponse) {
        this.journeyExecutionActivityMetricsResponse = journeyExecutionActivityMetricsResponse;
        return this;
    }
}