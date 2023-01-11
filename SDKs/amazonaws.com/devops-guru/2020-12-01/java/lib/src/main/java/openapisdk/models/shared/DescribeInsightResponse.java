package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeInsightResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProactiveInsight")
    public ProactiveInsight proactiveInsight;
    public DescribeInsightResponse withProactiveInsight(ProactiveInsight proactiveInsight) {
        this.proactiveInsight = proactiveInsight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReactiveInsight")
    public ReactiveInsight reactiveInsight;
    public DescribeInsightResponse withReactiveInsight(ReactiveInsight reactiveInsight) {
        this.reactiveInsight = reactiveInsight;
        return this;
    }
}