package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTopicsDetectionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTopicsDetectionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopicsDetectionJobPropertiesList")
    public TopicsDetectionJobProperties[] topicsDetectionJobPropertiesList;
    public ListTopicsDetectionJobsResponse withTopicsDetectionJobPropertiesList(TopicsDetectionJobProperties[] topicsDetectionJobPropertiesList) {
        this.topicsDetectionJobPropertiesList = topicsDetectionJobPropertiesList;
        return this;
    }
}