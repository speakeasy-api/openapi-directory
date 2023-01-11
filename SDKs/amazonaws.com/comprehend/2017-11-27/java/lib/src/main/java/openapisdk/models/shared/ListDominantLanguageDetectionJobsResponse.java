package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDominantLanguageDetectionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DominantLanguageDetectionJobPropertiesList")
    public DominantLanguageDetectionJobProperties[] dominantLanguageDetectionJobPropertiesList;
    public ListDominantLanguageDetectionJobsResponse withDominantLanguageDetectionJobPropertiesList(DominantLanguageDetectionJobProperties[] dominantLanguageDetectionJobPropertiesList) {
        this.dominantLanguageDetectionJobPropertiesList = dominantLanguageDetectionJobPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDominantLanguageDetectionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}