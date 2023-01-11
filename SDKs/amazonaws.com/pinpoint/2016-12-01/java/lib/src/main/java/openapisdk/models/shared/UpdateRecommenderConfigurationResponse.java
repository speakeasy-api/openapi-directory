package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRecommenderConfigurationResponse {
    @JsonProperty("RecommenderConfigurationResponse")
    public RecommenderConfigurationResponse recommenderConfigurationResponse;
    public UpdateRecommenderConfigurationResponse withRecommenderConfigurationResponse(RecommenderConfigurationResponse recommenderConfigurationResponse) {
        this.recommenderConfigurationResponse = recommenderConfigurationResponse;
        return this;
    }
}