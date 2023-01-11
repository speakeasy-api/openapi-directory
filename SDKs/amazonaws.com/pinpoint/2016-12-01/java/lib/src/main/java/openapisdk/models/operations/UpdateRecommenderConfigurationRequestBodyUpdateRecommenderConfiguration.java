package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration
 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
**/
public class UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationProviderIdType")
    public String recommendationProviderIdType;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withRecommendationProviderIdType(String recommendationProviderIdType) {
        this.recommendationProviderIdType = recommendationProviderIdType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationProviderRoleArn")
    public String recommendationProviderRoleArn;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withRecommendationProviderRoleArn(String recommendationProviderRoleArn) {
        this.recommendationProviderRoleArn = recommendationProviderRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationProviderUri")
    public String recommendationProviderUri;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withRecommendationProviderUri(String recommendationProviderUri) {
        this.recommendationProviderUri = recommendationProviderUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationTransformerUri")
    public String recommendationTransformerUri;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withRecommendationTransformerUri(String recommendationTransformerUri) {
        this.recommendationTransformerUri = recommendationTransformerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationsDisplayName")
    public String recommendationsDisplayName;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withRecommendationsDisplayName(String recommendationsDisplayName) {
        this.recommendationsDisplayName = recommendationsDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationsPerMessage")
    public Long recommendationsPerMessage;
    public UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration withRecommendationsPerMessage(Long recommendationsPerMessage) {
        this.recommendationsPerMessage = recommendationsPerMessage;
        return this;
    }
}