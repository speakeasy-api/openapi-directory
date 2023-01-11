package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEbsVolumeRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public GetRecommendationError[] errors;
    public GetEbsVolumeRecommendationsResponse withErrors(GetRecommendationError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetEbsVolumeRecommendationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeRecommendations")
    public VolumeRecommendation[] volumeRecommendations;
    public GetEbsVolumeRecommendationsResponse withVolumeRecommendations(VolumeRecommendation[] volumeRecommendations) {
        this.volumeRecommendations = volumeRecommendations;
        return this;
    }
}