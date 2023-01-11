package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRecommenderConfigurationResponse {
    @JsonProperty("RecommenderConfigurationResponse")
    public RecommenderConfigurationResponse recommenderConfigurationResponse;
    public DeleteRecommenderConfigurationResponse withRecommenderConfigurationResponse(RecommenderConfigurationResponse recommenderConfigurationResponse) {
        this.recommenderConfigurationResponse = recommenderConfigurationResponse;
        return this;
    }
}