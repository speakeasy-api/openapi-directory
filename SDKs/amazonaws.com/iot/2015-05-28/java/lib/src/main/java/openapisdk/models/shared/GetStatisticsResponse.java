package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStatisticsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public Statistics statistics;
    public GetStatisticsResponse withStatistics(Statistics statistics) {
        this.statistics = statistics;
        return this;
    }
}