package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestMetricFilterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matches")
    public MetricFilterMatchRecord[] matches;
    public TestMetricFilterResponse withMatches(MetricFilterMatchRecord[] matches) {
        this.matches = matches;
        return this;
    }
}