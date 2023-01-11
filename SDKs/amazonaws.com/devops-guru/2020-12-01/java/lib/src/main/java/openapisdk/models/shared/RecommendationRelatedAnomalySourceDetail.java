package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationRelatedAnomalySourceDetail
 *  Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric. 
**/
public class RecommendationRelatedAnomalySourceDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchMetrics")
    public RecommendationRelatedCloudWatchMetricsSourceDetail[] cloudWatchMetrics;
    public RecommendationRelatedAnomalySourceDetail withCloudWatchMetrics(RecommendationRelatedCloudWatchMetricsSourceDetail[] cloudWatchMetrics) {
        this.cloudWatchMetrics = cloudWatchMetrics;
        return this;
    }
}