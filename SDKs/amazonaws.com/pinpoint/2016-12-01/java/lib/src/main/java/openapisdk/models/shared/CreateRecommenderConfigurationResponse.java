package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRecommenderConfigurationResponse {
    @JsonProperty("RecommenderConfigurationResponse")
    public RecommenderConfigurationResponse recommenderConfigurationResponse;
    public CreateRecommenderConfigurationResponse withRecommenderConfigurationResponse(RecommenderConfigurationResponse recommenderConfigurationResponse) {
        this.recommenderConfigurationResponse = recommenderConfigurationResponse;
        return this;
    }
}