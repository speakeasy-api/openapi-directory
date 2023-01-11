package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJourneyExecutionMetricsResponse {
    @JsonProperty("JourneyExecutionMetricsResponse")
    public JourneyExecutionMetricsResponse journeyExecutionMetricsResponse;
    public GetJourneyExecutionMetricsResponse withJourneyExecutionMetricsResponse(JourneyExecutionMetricsResponse journeyExecutionMetricsResponse) {
        this.journeyExecutionMetricsResponse = journeyExecutionMetricsResponse;
        return this;
    }
}