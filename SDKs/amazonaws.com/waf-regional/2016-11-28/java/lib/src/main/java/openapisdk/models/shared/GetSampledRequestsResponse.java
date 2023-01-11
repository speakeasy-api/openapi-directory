package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSampledRequestsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PopulationSize")
    public Long populationSize;
    public GetSampledRequestsResponse withPopulationSize(Long populationSize) {
        this.populationSize = populationSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampledRequests")
    public SampledHttpRequest[] sampledRequests;
    public GetSampledRequestsResponse withSampledRequests(SampledHttpRequest[] sampledRequests) {
        this.sampledRequests = sampledRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeWindow")
    public TimeWindow timeWindow;
    public GetSampledRequestsResponse withTimeWindow(TimeWindow timeWindow) {
        this.timeWindow = timeWindow;
        return this;
    }
}