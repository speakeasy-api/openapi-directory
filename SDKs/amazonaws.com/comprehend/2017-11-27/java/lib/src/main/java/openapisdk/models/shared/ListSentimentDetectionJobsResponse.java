package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSentimentDetectionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListSentimentDetectionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SentimentDetectionJobPropertiesList")
    public SentimentDetectionJobProperties[] sentimentDetectionJobPropertiesList;
    public ListSentimentDetectionJobsResponse withSentimentDetectionJobPropertiesList(SentimentDetectionJobProperties[] sentimentDetectionJobPropertiesList) {
        this.sentimentDetectionJobPropertiesList = sentimentDetectionJobPropertiesList;
        return this;
    }
}