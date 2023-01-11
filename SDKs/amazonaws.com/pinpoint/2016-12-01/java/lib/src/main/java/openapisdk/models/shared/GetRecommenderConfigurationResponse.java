package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRecommenderConfigurationResponse {
    @JsonProperty("RecommenderConfigurationResponse")
    public RecommenderConfigurationResponse recommenderConfigurationResponse;
    public GetRecommenderConfigurationResponse withRecommenderConfigurationResponse(RecommenderConfigurationResponse recommenderConfigurationResponse) {
        this.recommenderConfigurationResponse = recommenderConfigurationResponse;
        return this;
    }
}