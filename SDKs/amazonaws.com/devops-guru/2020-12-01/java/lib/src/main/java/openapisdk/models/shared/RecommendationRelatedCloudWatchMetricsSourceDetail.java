package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationRelatedCloudWatchMetricsSourceDetail
 *  Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights. 
**/
public class RecommendationRelatedCloudWatchMetricsSourceDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public String metricName;
    public RecommendationRelatedCloudWatchMetricsSourceDetail withMetricName(String metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Namespace")
    public String namespace;
    public RecommendationRelatedCloudWatchMetricsSourceDetail withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}