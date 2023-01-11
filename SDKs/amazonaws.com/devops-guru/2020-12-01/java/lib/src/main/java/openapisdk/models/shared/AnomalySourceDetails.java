package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnomalySourceDetails
 *  Details about the source of the anomalous operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. 
**/
public class AnomalySourceDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchMetrics")
    public CloudWatchMetricsDetail[] cloudWatchMetrics;
    public AnomalySourceDetails withCloudWatchMetrics(CloudWatchMetricsDetail[] cloudWatchMetrics) {
        this.cloudWatchMetrics = cloudWatchMetrics;
        return this;
    }
}