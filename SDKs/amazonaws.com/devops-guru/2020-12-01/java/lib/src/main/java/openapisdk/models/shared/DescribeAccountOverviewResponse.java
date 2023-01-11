package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAccountOverviewResponse {
    @JsonProperty("MeanTimeToRecoverInMilliseconds")
    public Long meanTimeToRecoverInMilliseconds;
    public DescribeAccountOverviewResponse withMeanTimeToRecoverInMilliseconds(Long meanTimeToRecoverInMilliseconds) {
        this.meanTimeToRecoverInMilliseconds = meanTimeToRecoverInMilliseconds;
        return this;
    }
    @JsonProperty("ProactiveInsights")
    public Long proactiveInsights;
    public DescribeAccountOverviewResponse withProactiveInsights(Long proactiveInsights) {
        this.proactiveInsights = proactiveInsights;
        return this;
    }
    @JsonProperty("ReactiveInsights")
    public Long reactiveInsights;
    public DescribeAccountOverviewResponse withReactiveInsights(Long reactiveInsights) {
        this.reactiveInsights = reactiveInsights;
        return this;
    }
}