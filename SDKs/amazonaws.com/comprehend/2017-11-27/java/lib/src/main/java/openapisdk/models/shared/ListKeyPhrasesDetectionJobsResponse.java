package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListKeyPhrasesDetectionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyPhrasesDetectionJobPropertiesList")
    public KeyPhrasesDetectionJobProperties[] keyPhrasesDetectionJobPropertiesList;
    public ListKeyPhrasesDetectionJobsResponse withKeyPhrasesDetectionJobPropertiesList(KeyPhrasesDetectionJobProperties[] keyPhrasesDetectionJobPropertiesList) {
        this.keyPhrasesDetectionJobPropertiesList = keyPhrasesDetectionJobPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListKeyPhrasesDetectionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}