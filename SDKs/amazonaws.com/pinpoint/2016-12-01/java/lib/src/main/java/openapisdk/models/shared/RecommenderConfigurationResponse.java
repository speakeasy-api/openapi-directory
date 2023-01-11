package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommenderConfigurationResponse
 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
**/
public class RecommenderConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public RecommenderConfigurationResponse withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("CreationDate")
    public String creationDate;
    public RecommenderConfigurationResponse withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public RecommenderConfigurationResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public RecommenderConfigurationResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public RecommenderConfigurationResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RecommenderConfigurationResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationProviderIdType")
    public String recommendationProviderIdType;
    public RecommenderConfigurationResponse withRecommendationProviderIdType(String recommendationProviderIdType) {
        this.recommendationProviderIdType = recommendationProviderIdType;
        return this;
    }
    @JsonProperty("RecommendationProviderRoleArn")
    public String recommendationProviderRoleArn;
    public RecommenderConfigurationResponse withRecommendationProviderRoleArn(String recommendationProviderRoleArn) {
        this.recommendationProviderRoleArn = recommendationProviderRoleArn;
        return this;
    }
    @JsonProperty("RecommendationProviderUri")
    public String recommendationProviderUri;
    public RecommenderConfigurationResponse withRecommendationProviderUri(String recommendationProviderUri) {
        this.recommendationProviderUri = recommendationProviderUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationTransformerUri")
    public String recommendationTransformerUri;
    public RecommenderConfigurationResponse withRecommendationTransformerUri(String recommendationTransformerUri) {
        this.recommendationTransformerUri = recommendationTransformerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationsDisplayName")
    public String recommendationsDisplayName;
    public RecommenderConfigurationResponse withRecommendationsDisplayName(String recommendationsDisplayName) {
        this.recommendationsDisplayName = recommendationsDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationsPerMessage")
    public Long recommendationsPerMessage;
    public RecommenderConfigurationResponse withRecommendationsPerMessage(Long recommendationsPerMessage) {
        this.recommendationsPerMessage = recommendationsPerMessage;
        return this;
    }
}