package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSentimentDetectionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SentimentDetectionJobProperties")
    public SentimentDetectionJobProperties sentimentDetectionJobProperties;
    public DescribeSentimentDetectionJobResponse withSentimentDetectionJobProperties(SentimentDetectionJobProperties sentimentDetectionJobProperties) {
        this.sentimentDetectionJobProperties = sentimentDetectionJobProperties;
        return this;
    }
}