package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAnomalyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProactiveAnomaly")
    public ProactiveAnomaly proactiveAnomaly;
    public DescribeAnomalyResponse withProactiveAnomaly(ProactiveAnomaly proactiveAnomaly) {
        this.proactiveAnomaly = proactiveAnomaly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReactiveAnomaly")
    public ReactiveAnomaly reactiveAnomaly;
    public DescribeAnomalyResponse withReactiveAnomaly(ReactiveAnomaly reactiveAnomaly) {
        this.reactiveAnomaly = reactiveAnomaly;
        return this;
    }
}